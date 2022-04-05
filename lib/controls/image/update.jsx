import { AlertBox, ModalNext as Modal, Title } from "@kisskissbankbank/kitten";
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
    <Modal
      isOpen
      onClose={onClose}
      headerTitle={
        <Title modifier="quaternary">
          {translations.image_upload.description.title}
        </Title>
      }
    >
      {({ close }) => {
        return (
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
                  <Modal.Block>
                    <div className="k-u-margin-vertical-double">
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
                    <Modal.Actions>
                      <Modal.Button
                        type="submit"
                        size="big"
                        modifier="helium"
                        fit="fluid"
                      >
                        {translations.submit}
                      </Modal.Button>
                    </Modal.Actions>
                  </Modal.Block>
                </Form>
              );
            }}
          </Formik>
        );
      }}
    </Modal>
  );
};

export default Update;
