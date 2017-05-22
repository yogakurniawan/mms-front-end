import React from 'react';
import PropTypes from 'prop-types';
import Dialog from 'material-ui/Dialog';
import RaisedButton from 'material-ui/RaisedButton';
import { Step, Stepper, StepLabel } from 'material-ui/Stepper';

class DialogForm extends React.Component {

  constructor(props, context) {
    super(props, context);
    this.state = {
      stepIndex: 0
    }
  }

  handlePrev() {
    const { stepIndex } = this.state;
    const { handleClose } = this.props;
    if (stepIndex > 0) {
      this.setState({ stepIndex: stepIndex - 1 });
    }

    if (stepIndex === 0) {
      handleClose();
    }
  }

  handleNext() {
    const { stepIndex } = this.state;
    const { saveEmployeeDetails } = this.props;
    this.setState({
      stepIndex: stepIndex + 1,
    });
    if (stepIndex === 5) {
      saveEmployeeDetails()
        .then(() => this.setState({
          stepIndex: 0,
        }));
    }
  };

  getStepContent(stepIndex) {
    const { components } = this.props;
    const { EmployeeDetails, EmploymentHistory, EmploymentHistoryTable } = components;
    switch (stepIndex) {
      case 0:
        return <EmployeeDetails />;
      case 1:
        return (
          <div>
            <EmploymentHistory />
            <EmploymentHistoryTable />
          </div>
        );
      default:
        return (
          <div>
            <h2>Content</h2>
            <div></div>
          </div>
        );
    }
  }

  render() {
    const { stepIndex } = this.state;
    const { open, handleClose } = this.props;
    const title = [
      <Stepper key="Stepper" linear={true} activeStep={stepIndex}>
        <Step>
          <StepLabel>Detail</StepLabel>
        </Step>
        <Step>
          <StepLabel>History</StepLabel>
        </Step>
        <Step>
          <StepLabel>Grades</StepLabel>
        </Step>
        <Step>
          <StepLabel>Dependents</StepLabel>
        </Step>
        <Step>
          <StepLabel>Address</StepLabel>
        </Step>
        <Step>
          <StepLabel>Location</StepLabel>
        </Step>
      </Stepper>
    ];

    const actionsBtn = [
      <RaisedButton
        label={stepIndex === 0 ? 'Cancel' : 'Back'}
        onTouchTap={this.handlePrev.bind(this)}
      />,
      <RaisedButton
        label={stepIndex === 5 ? 'Create Employee' : 'Next'}
        secondary={true}
        keyboardFocused={true}
        onTouchTap={this.handleNext.bind(this)}
      />
    ];

    return (
      <div>
        <Dialog
          open={open}
          title={title}
          modal={false}
          actions={actionsBtn}
          autoScrollBodyContent={true}
          onRequestClose={handleClose}
        >
          {this.getStepContent(stepIndex)}
        </Dialog>
      </div>
    )
  }
}

DialogForm.propTypes = {
  components: PropTypes.object.isRequired,
  open: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
  saveEmployeeDetails: PropTypes.func.isRequired
}

export default DialogForm;
