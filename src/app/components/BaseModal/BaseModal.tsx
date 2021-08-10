import * as React from 'react';
import { Modal, Button } from 'react-bootstrap';
import BaseForm from '../BaseForm/BaseForm';
import './BaseModal.scss';

type Props = {
  headerTitle?: string;
  isLock?: boolean;
  children?: any;
  isShowHeader?: boolean;
  isShowFooter?: boolean;
  footerSaveLabel?: string;
  footerCancelLabel?: string;
  className?: string;
  centered?: boolean;
  showCloseBtn?: boolean;
  size?: 'sm' | 'lg' | 'xl';
  onOpen?: () => void;
  onClose?: () => void;
  onClosing?: () => void;
};

type State = {
  isShow: boolean;
  isLock: boolean;
  isShowHeader: boolean;
  isShowFooter: boolean;
  footerSaveLabel: string;
  footerCancelLabel: string;
  centered: boolean;
  showCloseBtn: boolean;
  size: 'sm' | 'lg' | 'xl';
};

export default class BaseModal extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    const {
      isLock,
      isShowHeader,
      isShowFooter,
      footerSaveLabel,
      footerCancelLabel,
      centered,
      showCloseBtn,
      size,
    } = this.props;

    // Set default values
    this.state = {
      isShow: false,
      isLock: isLock !== undefined ? isLock : false,
      isShowHeader: isShowHeader !== undefined ? isShowHeader : false,
      isShowFooter: isShowFooter !== undefined ? isShowFooter : false,
      footerSaveLabel: footerSaveLabel !== undefined ? footerSaveLabel : 'Save',
      footerCancelLabel:
        footerCancelLabel !== undefined ? footerCancelLabel : 'Cancel',
      centered: centered !== undefined ? centered : false,
      showCloseBtn: showCloseBtn !== undefined ? showCloseBtn : false,
      size: size !== undefined ? size : 'lg',
    };
  }

  openModal = () => {
    this.setState({
      isShow: true,
    });
    if (this.props.onOpen) {
      this.props.onOpen();
    }
  };

  closeModal = () => {
    this.setState({
      isShow: false,
    });
    if (this.props.onClose) {
      this.props.onClose();
    }
  };

  handleSaveModal = () => {
    console.log('save modal');
  };

  render() {
    const { headerTitle, className } = this.props;

    const {
      isShow,
      isLock,
      isShowHeader,
      isShowFooter,
      footerSaveLabel,
      footerCancelLabel,
      centered,
      showCloseBtn,
      size,
    } = this.state;

    let backdropStatus = isLock ? 'static' : true;

    return (
      <Modal
        className={`base-modal ${className}`}
        show={isShow}
        onHide={this.closeModal}
        backdrop={backdropStatus}
        centered={centered}
        size={size}
      >
        {/* Header */}
        {isShowHeader && (
          <Modal.Header closeButton={showCloseBtn}>
            <Modal.Title>{headerTitle}</Modal.Title>
          </Modal.Header>
        )}
        {/* Body */}
        <Modal.Body>
          <div className="modal-body-container">
            {this.props.children}
            {/* <BaseForm /> */}
          </div>
        </Modal.Body>
        {/* Footer */}
        {isShowFooter && (
          <Modal.Footer className="modal-footer-action">
            <Button
              variant="success"
              className="btn-modal"
              onClick={this.handleSaveModal}
            >
              {footerSaveLabel}
            </Button>
            <Button
              variant="secondary"
              className="btn-modal"
              onClick={this.closeModal}
            >
              {footerCancelLabel}
            </Button>
          </Modal.Footer>
        )}
      </Modal>
    );
  }
}
