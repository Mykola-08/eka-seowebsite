'use client';

import { useEffect, useRef } from 'react';

interface HubSpotFormProps {
  portalId: string;
  formId: string;
  region?: string;
  onSubmit?: () => void;
  className?: string;
}

declare global {
  interface Window {
    hbspt?: {
      forms: {
        create: (config: {
          portalId: string;
          formId: string;
          region?: string;
          target: string;
          onFormSubmitted?: () => void;
        }) => void;
      };
    };
  }
}

export default function HubSpotForm({
  portalId,
  formId,
  region = 'eu1',
  onSubmit,
  className,
}: HubSpotFormProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const formCreated = useRef(false);

  useEffect(() => {
    if (!portalId || !formId || formCreated.current) return;

    const createForm = () => {
      if (window.hbspt && containerRef.current) {
        const targetId = `hubspot-form-${formId}`;
        containerRef.current.id = targetId;

        window.hbspt.forms.create({
          portalId,
          formId,
          region,
          target: `#${targetId}`,
          onFormSubmitted: onSubmit,
        });
        formCreated.current = true;
      }
    };

    // If HubSpot script is already loaded, create form immediately
    if (window.hbspt) {
      createForm();
      return;
    }

    // Otherwise, load the HubSpot forms script
    const script = document.createElement('script');
    script.src = 'https://js.hsforms.net/forms/v2.js';
    script.async = true;
    script.onload = createForm;
    document.head.appendChild(script);

    return () => {
      formCreated.current = false;
    };
  }, [portalId, formId, region, onSubmit]);

  return <div ref={containerRef} className={className} />;
}
