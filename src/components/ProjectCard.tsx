'use client';

import { Card, Column, Text, Heading } from '@once-ui-system/core';

interface ProjectCardProps {
  href: string;
  title: string;
  description: string;
  link: string;
  tags?: string[];
  image?: string;
  variant?: 'home' | 'grid';
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  href,
  link,
  title,
  description,
  tags = [],
  image,
  variant = 'grid',
}) => {
  const targetURL = link || href;
  const isExternal = Boolean(link);
  const isHome = variant === 'home';

  // Styles specific for 'grid' vs 'home'
  const cardHeight = isHome ? 'auto' : '380px'; // fixed only on grid/work page
  const imageHeight = isHome ? 'auto' : '200px';

  return (
    <a
      href={targetURL}
      target={isExternal ? '_blank' : undefined}
      rel={isExternal ? 'noopener noreferrer' : undefined}
      style={{
        textDecoration: 'none',
        display: 'block',
        height: '100%',
        maxWidth: isHome ? '90%' : '100%',
        margin: isHome ? '0 auto' : undefined,
      }}
    >
      <Card
        padding="0"
        style={{
          display: 'flex',
          flexDirection: 'column',
          height: cardHeight,
          borderRadius: '10px',
          overflow: 'hidden',
        }}
      >
        {image && (
          <div
            style={{
              width: '100%',
              height: imageHeight,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: '#0a0a0a',
              flexShrink: 0,
            }}
          >
            <img
              src={image}
              alt={title}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
              }}
            />
          </div>
        )}

        <Column
          padding="m"
          style={{
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            overflow: 'hidden',
          }}
        >
          <div>
            <Heading
              as="h3"
              variant="heading-strong-s"
              wrap="balance"
              style={{
                fontSize: '1rem',
                marginBottom: '0.25rem',
                display: '-webkit-box',
                WebkitLineClamp: 2,
                WebkitBoxOrient: 'vertical',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
              }}
            >
              {title}
            </Heading>

            {description?.trim() && (
              <Text
                variant="body-default-xs"
                onBackground="neutral-weak"
                wrap="balance"
                style={{
                  fontSize: '0.8rem',
                  lineHeight: '1.4',
                  display: '-webkit-box',
                  WebkitLineClamp: 3,
                  WebkitBoxOrient: 'vertical',
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                }}
              >
                {description}
              </Text>
            )}

            {tags.length > 0 && (
              <Text
                variant="label-default-xs"
                onBackground="neutral-weak"
                style={{
                  fontSize: '0.7rem',
                  opacity: 0.7,
                  marginTop: '4px',
                }}
              >
                {tags.join(', ')}
              </Text>
            )}
          </div>

          <Text
            variant="label-default-xs"
            onBackground="neutral-weak"
            style={{
              fontSize: '0.75rem',
              opacity: 0.6,
              marginTop: '12px',
            }}
          >
            {isExternal ? 'Click to view on GitHub →' : 'Click to read more →'}
          </Text>
        </Column>
      </Card>
    </a>
  );
};
