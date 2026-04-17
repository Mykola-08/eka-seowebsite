'use client';

import { useEffect, useRef, useState } from 'react';

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
  const [ready, setReady] = useState(false);

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
        setReady(true);
      }
    };

    // If HubSpot script is already loaded, create form immediately
    if (window.hbspt) {
      createForm();
      return;
    }

    // Otherwise, load the HubSpot forms script
    const script = document.createElement('script');
    script.src = region ? `https://js-${region}.hsforms.net/forms/embed/v2.js` : 'https://js.hsforms.net/forms/v2.js';
    script.async = true;
    script.onload = createForm;
    document.head.appendChild(script);

    return () => {
      formCreated.current = false;
    };
  }, [portalId, formId, region, onSubmit]);

  return (
    <div ref={containerRef} className={className}>
      {!ready && (
        // Reserved-space skeleton — prevents CLS while HubSpot JS loads.
        <div
          aria-hidden
          className="min-h-110 animate-pulse rounded-apple bg-muted/40"
        />
      )}
    </div>
  );
}

