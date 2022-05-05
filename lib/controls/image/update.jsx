import { AlertBox, Modal, Button } from "@kisskissbankbank/kitten";
import { EditorState } from "draft-js";
import { Form, Formik } from "formik";
import React, { useContext, useEffect } from "react";
import { InputText, Label } from "../../components/form";
import { EditorContext, updateDisabled, updateEditor } from "../../context";

const Update = ({ onClose, description, entityKey }) => {
  const [{ editorState, translations }, dispatch] = useContext(EditorContext);
  useEffect(() => {
    dispatch(updateDisabled(true));
    return () => dispatch(updateDisabled(false));
  }, []);

  return (
    <Modal isOpen onClose={onClose} zIndex={1000}>
      {({ close }) => {
        return (
          <>
            <Modal.Title>
              {translations.image_upload.description.title}
            </Modal.Title>

            <Formik
              initialValues={{ description }}
              onSubmit={({ description }) => {
                const contentState = editorState.getCurrentContent();
                const contentWithNewData = contentState.mergeEntityData(
                  entityKey,
                  { description }
                );
                const userSelection = editorState.getSelection();

                const newEditor = EditorState.push(
                  editorState,
                  contentWithNewData,
                  "change-block-data"
                );
                dispatch(
                  updateEditor(
                    EditorState.forceSelection(newEditor, userSelection)
                  )
                );
                close();
                onClose();
              }}
            >
              {() => {
                return (
                  <Form>
                    <Modal.Form>
                      <div className="k-u-margin-bottom-double">
                        <Label htmlFor="description">
                          {translations.image_upload.description.label}
                        </Label>
                        <InputText
                          name="description"
                          tag="autoresize"
                          placeholder={
                            translations.image_upload.description.placeholder
                          }
                        />
                      </div>

                      <AlertBox>
                        {translations.image_upload.description.helper}
                      </AlertBox>

                      <Modal.Actions className="k-u-margin-top-triple">
                        <Button type="submit" size="large" modifier="helium">
                          {translations.submit}
                        </Button>
                      </Modal.Actions>
                    </Modal.Form>
                  </Form>
                );
              }}
            </Formik>
          </>
        );
      }}
    </Modal>
  );
};

export default Update;
