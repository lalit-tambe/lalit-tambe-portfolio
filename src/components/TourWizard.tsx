import React, { useState, useEffect } from 'react';
import { Joyride, CallBackProps, STATUS, Step } from 'react-joyride';

interface TourWizardProps {
  onOpenTerminal: () => void;
}

export const TourWizard: React.FC<TourWizardProps> = ({ onOpenTerminal }) => {
  const [run, setRun] = useState(false);

  useEffect(() => {
    const hasSeenTour = localStorage.getItem('hasSeenTour');
    if (!hasSeenTour) {
      // Add a slight delay so the UI fully mounts
      setTimeout(() => setRun(true), 500);
    }
  }, []);

  const steps: Step[] = [
    {
      target: '.tour-activity-bar',
      content: 'Welcome to my interactive portfolio! Use this bar to toggle the File Explorer or Search through my projects.',
      skipBeacon: true,
      placement: 'right',
    },
    {
      target: '.tour-sidebar',
      content: 'Explore my work like a real developer. Click on folders to expand them and open files to read about my skills and experience.',
      skipBeacon: true,
      placement: 'right',
    },
    {
      target: '.tour-editor',
      content: 'This is where the magic happens. View formatted Markdown and syntax-highlighted code showcasing my expertise.',
      skipBeacon: true,
      placement: 'center',
    },
    {
      target: '.tour-terminal-btn',
      content: 'Feeling geeky? Click here to open the interactive terminal.',
      skipBeacon: true,
      placement: 'top-start',
    },
    {
      target: '.tour-terminal-input',
      content: 'Try typing commands like `experience`, `projects`, or `skills` to interact directly with my portfolio!',
      skipBeacon: true,
      placement: 'top',
    }
  ];

  const handleJoyrideCallback = (data: CallBackProps) => {
    const { status, type, index, action } = data;
    const finishedStatuses: string[] = [STATUS.FINISHED, STATUS.SKIPPED];

    if (finishedStatuses.includes(status)) {
      setRun(false);
      localStorage.setItem('hasSeenTour', 'true');
    }

    // Step index is 0-based.
    // Index 3 is '.tour-terminal-btn'.
    // If the user clicks Next on index 3, we want to open the terminal before index 4 renders.
    if (type === 'step:after' && index === 3 && action === 'next') {
      onOpenTerminal();
    }
  };

  return (
    <Joyride
      steps={steps}
      run={run}
      continuous={true}
      disableScrolling={true}
      options={{
        showProgress: true,
        buttons: ['skip', 'back', 'primary', 'close'],
        arrowColor: '#252526',
        backgroundColor: '#252526',
        overlayColor: 'rgba(0, 0, 0, 0.5)',
        primaryColor: '#007acc',
        textColor: '#cccccc',
        zIndex: 1000,
      }}
      callback={handleJoyrideCallback}
      styles={{
        tooltipContainer: {
          textAlign: 'left',
          fontSize: '14px',
          fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
          lineHeight: '1.5',
        },
        buttonPrimary: {
          backgroundColor: '#007acc',
          borderRadius: '2px',
          outline: 'none',
        },
        buttonBack: {
          color: '#cccccc',
          marginRight: '10px',
          outline: 'none',
        },
        buttonSkip: {
          color: '#cccccc',
          outline: 'none',
        }
      }}
    />
  );
};
