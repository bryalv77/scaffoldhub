import React, { useState } from 'react';
import { Modal } from 'antd';
import { i18n } from 'src/i18n';
import InstitutionForm from 'src/view/institution/form/InstitutionForm';
import InstitutionService from 'src/modules/institution/institutionService';
import Errors from 'src/modules/shared/error/errors';

const InstitutionFormModal = (props) => {
  const [saveLoading, setSaveLoading] = useState(false);

  const doSubmit = async (_, data) => {
    try {
      setSaveLoading(true);
      const { id } = await InstitutionService.create(data);
      const record = await InstitutionService.find(id);
      props.onSuccess(record);
    } catch (error) {
      Errors.handle(error);
    } finally {
      setSaveLoading(false);
    }
  };

  if (!props.visible) {
    return null;
  }

  return (
    <Modal
      style={{ top: 24 }}
      title={i18n('entities.institution.new.title')}
      visible={props.visible}
      onCancel={() => props.onCancel()}
      footer={false}
      width="80%"
    >
      <InstitutionForm
        saveLoading={saveLoading}
        onSubmit={doSubmit}
        onCancel={props.onCancel}
        modal
      />
    </Modal>
  );
};

export default InstitutionFormModal;
