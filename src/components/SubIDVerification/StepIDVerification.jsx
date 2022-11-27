import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import BasicInfo from '../../pages/BasicInfo';
import IDVerification from '../../pages/IDVerification';
import FaceRecognition from '../../pages/FaceRecognition';
import UplaodIDCard from './SubBasicInfo/UplaodIDCard';
import PersonalVerificationFinal from '../../pages/PersonalVerificationFinal';

const steps = ['Basic info', 'ID Verification', 'Face Recognition'];

export default function StepIDVerification() {
  const [activeStep, setActiveStep] = React.useState(0);
  const [skipped, setSkipped] = React.useState(new Set());

  const isStepOptional = (step) => {
    return step === 1;
  };

  const isStepSkipped = (step) => {
    return skipped.has(step);
  };

  const handleNext = () => {
    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped(newSkipped);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleSkip = () => {
    if (!isStepOptional(activeStep)) {
      // You probably want to guard against something like this,
      // it should never occur unless someone's actively trying to break something.
      throw new Error("You can't skip a step that isn't optional.");
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped((prevSkipped) => {
      const newSkipped = new Set(prevSkipped.values());
      newSkipped.add(activeStep);
      return newSkipped;
    });
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Stepper activeStep={activeStep} className="mb-5" alternativeLabel > 
        {steps.map((label, index) => {
          const stepProps = {};
          const labelProps = {};
          if (isStepSkipped(index)) {
            stepProps.completed = false;
          }
          
          return (
            <Step key={label} {...stepProps}>
              <StepLabel {...labelProps} > <Typography color={""} >{label}</Typography></StepLabel>
            </Step>
          );
        })}
      </Stepper>


      {
        activeStep === 0? 
          <BasicInfo />
          : activeStep === 1?
            <UplaodIDCard />
            : activeStep === 2?
              <FaceRecognition /> : null
      }


      {activeStep === steps.length ? (
        <PersonalVerificationFinal />
      ) : (
        <React.Fragment>
          <Box sx={{ display: 'flex', flexDirection: 'row', p: 2 }}>
            <Button
              disabled={activeStep === 0}
              onClick={handleBack}
              sx={{ mr: 1 }}
              variant="outlined" size='large'
            >
              Back
            </Button>
           

           <Button onClick={handleNext} variant="contained" size='large' className={'ms-auto'}>
              {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
            </Button>
          </Box>
        </React.Fragment>
      )}
    </Box>
  );
}
