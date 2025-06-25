'use client';

import { mailchimp } from '@/resources';
import {
  Button,
  Flex,
  Heading,
  Input,
  Textarea,
  Column,
} from '@once-ui-system/core';
import { useRef, useState } from 'react';

export const Mailchimp = () => {
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>(
    'idle',
  );
  const formRef = useRef<HTMLFormElement | null>(null);
  const resultRef = useRef<HTMLDivElement | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = formRef.current;
    const result = resultRef.current;
    if (!form || !result) return;

    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());
    const json = JSON.stringify(data);

    result.innerHTML = 'Please wait...';
    setStatus('sending');

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: json,
      });

      const resultData = await response.json();

      if (response.status === 200) {
        result.innerHTML = 'Form submitted successfully';
        setStatus('sent');
        form.reset();
      } else {
        console.error(resultData);
        result.innerHTML = resultData.message;
        setStatus('error');
      }
    } catch (error) {
      console.error(error);
      if (result) result.innerHTML = 'Something went wrong!';
      setStatus('error');
    }

    setTimeout(() => {
      if (result) result.style.display = 'none';
    }, 3000);
  };

  return (
    <Column
      overflow="hidden"
      width="m"
      maxWidth="m"
      padding="l"
      radius="l"
      marginBottom="m"
      horizontal="center"
      align="center"
      background="surface"
      border="neutral-alpha-weak"
    >
      <Heading
        style={{ position: 'relative' }}
        marginBottom="m"
        variant="display-strong-xs"
      >
        Let's get in touch
      </Heading>

      <form
        ref={formRef}
        onSubmit={handleSubmit}
        style={{ margin: '0 auto', width: '100%', maxWidth: '500px' }}
        id="form"
        method="POST"
      >
        <Flex direction="column" gap="8">
          {/* Hidden fields */}
          <input
            type="hidden"
            name="access_key"
            value="32e376a3-5032-444e-a9e1-9ea1426c8f7f"
          />
          <input type="checkbox" name="botcheck" style={{ display: 'none' }} />

          {/* Form fields */}
          <Input
            name="name"
            id="name"
            type="text"
            placeholder="Your Name"
            required
          />
          <Input
            name="email"
            id="email"
            type="email"
            placeholder="Your Email"
            required
          />
          <Textarea
            name="message"
            id="message"
            placeholder="Your Message"
            rows={2}
            required
          />

          {/* Submit button */}
          <Flex style={{ justifyContent: 'center', marginTop: '6%' }}>
            <Button
              type="submit"
              size="m"
              style={{ width: '50%' }}
              disabled={status === 'sending' || status === 'sent'}
              variant={
                status === 'sent'
                  ? 'primary'
                  : status === 'error'
                  ? 'danger'
                  : 'primary'
              }
            >
              {status === 'idle' && 'Send Message'}
              {status === 'sending' && 'Sending...'}
              {status === 'sent' && 'Sent ✓'}
              {status === 'error' && 'Try Again'}
            </Button>
          </Flex>

          {/* Response output */}
          <div
            id="result"
            ref={resultRef}
            style={{ marginTop: '1rem', color: '#aaa' }}
          />
        </Flex>
      </form>
    </Column>
  );
};
