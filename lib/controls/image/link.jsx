import { Button, Modal } from "@kisskissbankbank/kitten";
import { Form, Formik } from "formik";
import linkifyIt from "linkify-it";
import React, { useContext, useEffect } from "react";
import tlds from "tlds";
import { InputText, Label } from "../../components/form";
import { EditorContext, updateDisabled, updateEditor } from "../../context";
import { addDataToEntity } from "../../utils";

const linkify = linkifyIt();
linkify.tlds(tlds);

const LinkImageModal = ({ onClose, url = "", entityKey }) => {
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
            <Modal.Title>{translations.link.title}</Modal.Title>

            <Formik
              initialValues={{ url }}
              onSubmit={({ url }) => {
                dispatch(
                  updateEditor(addDataToEntity(editorState, entityKey, { url }))
                );
                close();
                onClose();
              }}
            >
              {() => {
                return (
                  <Form>
                    <Modal.Content align="left">
                      <div>
                        <Label htmlFor="url">
                          {translations.image_upload.url}
                        </Label>
                        <InputText
                          name="url"
                          validate={(value) => {
                            if (!linkify.test(value)) {
                              return translations.link.error;
                            }
                          }}
                        />
                      </div>

                      <Modal.Actions>
                        <Button size="large" type="submit" modifier="helium">
                          {translations.submit}
                        </Button>
                      </Modal.Actions>
                    </Modal.Content>
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

export default LinkImageModal;
