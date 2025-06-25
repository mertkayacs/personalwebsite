'use client';

import { mailchimp } from '@/resources';
import {
  Button,
  Flex,
  Heading,
  Input,
  Textarea,
  Column,
  Background,
  Text,
} from '@once-ui-system/core';
import { useRef, useState } from 'react';
import { opacity, SpacingToken } from '@once-ui-system/core';

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
      style={{ width: '100%' }}
      padding="xl"
      radius="l"
      marginBottom="m"
      horizontal="center"
      align="center"
      background="surface"
      border="neutral-alpha-weak"
    >
      <Background
        top="0"
        position="absolute"
        mask={{
          x: mailchimp.effects.mask.x,
          y: mailchimp.effects.mask.y,
          radius: mailchimp.effects.mask.radius,
          cursor: mailchimp.effects.mask.cursor,
        }}
        gradient={{
          display: mailchimp.effects.gradient.display,
          opacity: mailchimp.effects.gradient.opacity as opacity,
          x: mailchimp.effects.gradient.x,
          y: mailchimp.effects.gradient.y,
          width: mailchimp.effects.gradient.width,
          height: mailchimp.effects.gradient.height,
          tilt: mailchimp.effects.gradient.tilt,
          colorStart: mailchimp.effects.gradient.colorStart,
          colorEnd: mailchimp.effects.gradient.colorEnd,
        }}
        dots={{
          display: mailchimp.effects.dots.display,
          opacity: mailchimp.effects.dots.opacity as opacity,
          size: mailchimp.effects.dots.size as SpacingToken,
          color: mailchimp.effects.dots.color,
        }}
        grid={{
          display: mailchimp.effects.grid.display,
          opacity: mailchimp.effects.grid.opacity as opacity,
          color: mailchimp.effects.grid.color,
          width: mailchimp.effects.grid.width,
          height: mailchimp.effects.grid.height,
        }}
        lines={{
          display: mailchimp.effects.lines.display,
          opacity: mailchimp.effects.lines.opacity as opacity,
          size: mailchimp.effects.lines.size as SpacingToken,
          thickness: mailchimp.effects.lines.thickness,
          angle: mailchimp.effects.lines.angle,
          color: mailchimp.effects.lines.color,
        }}
      />

      <Heading
        style={{ position: 'relative' }}
        marginBottom="s"
        variant="display-strong-xs"
      >
        Let&apos;s get in touch
      </Heading>
      <Text
        style={{
          position: 'relative',
          maxWidth: 'var(--responsive-width-xs)',
        }}
        wrap="balance"
        marginBottom="l"
        onBackground="neutral-medium"
      >
        Fill out the form below and I’ll get back to you as soon as possible.
      </Text>

      <form
        ref={formRef}
        onSubmit={handleSubmit}
        method="POST"
        style={{ width: '100%', display: 'flex', justifyContent: 'center' }}
      >
        <Flex
          direction="column"
          gap="8"
          style={{ width: '100%', maxWidth: '600px' }}
          id="mc_embed_signup_scroll"
        >
          <input
            type="hidden"
            name="access_key"
            value="32e376a3-5032-444e-a9e1-9ea1426c8f7f"
          />
          <input type="checkbox" name="botcheck" style={{ display: 'none' }} />

          <Input
            name="name"
            id="name"
            type="text"
            placeholder="Your Name"
            required
            width="100%"
          />
          <Input
            name="email"
            id="email"
            type="email"
            placeholder="Your Email"
            required
            width="100%"
          />
          <Textarea
            name="message"
            id="message"
            placeholder="Your Message"
            rows={3}
            required
            style={{ width: '100%' }}
          />

          <Flex height="48" vertical="center">
            <Button
              type="submit"
              size="m"
              style={{ width: '100%' }}
              disabled={status === 'sending' || status === 'sent'}
            >
              {status === 'idle' && 'Send Message'}
              {status === 'sending' && 'Sending...'}
              {status === 'sent' && 'Sent ✓'}
              {status === 'error' && 'Try Again'}
            </Button>
          </Flex>

          <div
            id="result"
            ref={resultRef}
            style={{ marginTop: '1rem', color: '#aaa', textAlign: 'center' }}
          />
        </Flex>
      </form>
    </Column>
  );
};
