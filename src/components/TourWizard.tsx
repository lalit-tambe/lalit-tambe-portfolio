import React, { useState, useEffect, useMemo } from 'react';
import { Joyride, EventData, STATUS, Step } from 'react-joyride';

interface TourWizardProps {
  onOpenTerminal: () => void;
}



const tourOptions = {
  showProgress: true,
  buttons: ['skip', 'back', 'primary', 'close'] as any[],
  arrowColor: '#252526',
  backgroundColor: '#252526',
  overlayColor: 'rgba(0, 0, 0, 0.5)',
  primaryColor: '#007acc',
  textColor: '#cccccc',
  zIndex: 1000,
  targetWaitTimeout: 3000,
};

const tourStyles = {
  tooltipContainer: {
    textAlign: 'left',
    fontSize: '14px',
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    lineHeight: '1.5',
  } as React.CSSProperties,
  buttonPrimary: {
    backgroundColor: '#007acc',
    borderRadius: '2px',
    outline: 'none',
  } as React.CSSProperties,
  buttonBack: {
    color: '#cccccc',
    marginRight: '10px',
    outline: 'none',
  } as React.CSSProperties,
  buttonSkip: {
    color: '#cccccc',
    outline: 'none',
  } as React.CSSProperties,
};

export const TourWizard: React.FC<TourWizardProps> = ({ onOpenTerminal }) => {
  const [run, setRun] = useState(false);

  const steps: Step[] = useMemo(() => [
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
      target: '.tour-editor-tabs',
      content: 'This is where the magic happens. View formatted Markdown and syntax-highlighted code showcasing my expertise.',
      skipBeacon: true,
      placement: 'bottom',
    },
    {
      target: '.tour-terminal-btn',
      content: 'Feeling geeky? Click here to close or open the interactive terminal.',
      skipBeacon: true,
      placement: 'top-start',
    },
    {
      target: '.tour-terminal-input',
      content: 'Try typing commands like `experience`, `projects`, or `skills` to interact directly with my portfolio!',
      skipBeacon: true,
      placement: 'top',
      before: () => new Promise<void>((resolve) => {
        onOpenTerminal();
        setTimeout(resolve, 500); // 500ms guaranteed rendering window before Joyride proceeds
      })
    }
  ], [onOpenTerminal]);

  useEffect(() => {
    setTimeout(() => {
      setRun(true);
    }, 500);
  }, []);

  const handleJoyrideCallback = (data: EventData) => {
    const { status, type, index } = data;
    const finishedStatuses: string[] = [STATUS.FINISHED, STATUS.SKIPPED];

    if (finishedStatuses.includes(status as any)) {
      setRun(false);
    }
  };

  return (
    <Joyride
      steps={steps}
      run={run}
      continuous={true}
      options={tourOptions}
      onEvent={handleJoyrideCallback}
      styles={tourStyles}
    />
  );
};
