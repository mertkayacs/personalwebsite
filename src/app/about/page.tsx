import {
  Avatar,
  Button,
  Column,
  Flex,
  Heading,
  Icon,
  IconButton,
  Media,
  Tag,
  Text,
  Meta,
  Schema,
} from '@once-ui-system/core';
import { baseURL, about, person, social, newsletter } from '@/resources';
import TableOfContents from '@/components/about/TableOfContents';
import styles from '@/components/about/about.module.scss';
import React from 'react';
import { SmartLink } from '@once-ui-system/core';
import TechBadgeGrid from '@/components/about/TechBadgeGrid';
import { Mailchimp } from '@/components';

export async function generateMetadata() {
  return Meta.generate({
    title: about.title,
    description: about.description,
    baseURL: baseURL,
    image: `/api/og/generate?title=${encodeURIComponent(about.title)}`,
    path: about.path,
  });
}

export default function About() {
  const structure = [
    {
      title: about.intro.title,
      display: about.intro.display,
      items: [],
    },
    {
      title: about.work.title,
      display: about.work.display,
      items: about.work.experiences.map((experience) => experience.company),
    },
    {
      title: about.studies.title,
      display: about.studies.display,
      items: about.studies.institutions.map((institution) => institution.name),
    },
    {
      title: about.technical.title,
      display: about.technical.display,
      items: about.technical.skills.map((skill) => skill.title),
    },
  ];

  return (
    <Column maxWidth="m">
      <Schema
        as="webPage"
        baseURL={baseURL}
        title={about.title}
        description={about.description}
        path={about.path}
        image={`/api/og/generate?title=${encodeURIComponent(about.title)}`}
        author={{
          name: person.name,
          url: `${baseURL}${about.path}`,
          image: `${baseURL}${person.avatar}`,
        }}
      />

      {about.tableOfContent.display && (
        <Column
          left="0"
          style={{ top: '50%', transform: 'translateY(-50%)' }}
          position="fixed"
          paddingLeft="24"
          gap="32"
          hide="s"
        >
          <TableOfContents structure={structure} about={about} />
        </Column>
      )}

      <Flex fillWidth mobileDirection="column" horizontal="center">
        {about.avatar.display && (
          <Column
            className={styles.avatar}
            position="sticky"
            minWidth="160"
            paddingX="l"
            paddingBottom="xl"
            gap="m"
            flex={3}
            horizontal="center"
          >
            <Avatar src={person.avatar} size="xl" />
            <Flex gap="8" vertical="center">
              <Icon onBackground="accent-weak" name="globe" />
              {person.location}
            </Flex>
            {person.languages.length > 0 && (
              <Flex wrap gap="8">
                {person.languages.map((language) => (
                  <Tag key={language} size="l">
                    {language}
                  </Tag>
                ))}
              </Flex>
            )}
            <Flex gap="8" horizontal="center">
              <SmartLink
                id="cv"
                data-border="rounded"
                href="/mertkayacv.pdf"
                download
                style={{ width: '100%' }}
              >
                <Flex
                  fitWidth
                  border="brand-alpha-medium"
                  style={{
                    backdropFilter: 'blur(var(--static-space-1))',
                    marginTop: '12px',
                  }}
                  background="brand-alpha-weak"
                  radius="full"
                  padding="4"
                  gap="8"
                  vertical="center"
                  cursor="pointer"
                  transition="micro-medium"
                >
                  <Icon
                    paddingLeft="12"
                    name="download"
                    onBackground="brand-weak"
                  />
                  <Flex paddingX="8">My Resume</Flex>
                  <Icon name="chevronRight" onBackground="brand-weak" />
                </Flex>
              </SmartLink>
            </Flex>
          </Column>
        )}

        <Column className={styles.blockAlign} flex={9} maxWidth={40}>
          <Column
            id={about.intro.title}
            fillWidth
            minHeight="160"
            vertical="center"
            marginBottom="32"
          >
            <Flex
              className={styles.blockAlign}
              gap="12"
              marginBottom="m"
              horizontal="start"
            >
              <SmartLink
                href={about.calendar.link}
                style={{ textDecoration: 'none' }}
                unstyled
              >
                <Flex
                  fitWidth
                  border="brand-alpha-medium"
                  style={{ backdropFilter: 'blur(var(--static-space-1))' }}
                  background="brand-alpha-weak"
                  radius="full"
                  padding="4"
                  gap="8"
                  vertical="center"
                  cursor="pointer"
                  transition="micro-medium"
                >
                  <Icon
                    paddingLeft="12"
                    name="calendar"
                    onBackground="brand-weak"
                  />
                  <Flex paddingX="8">Schedule a call</Flex>
                  <Icon name="chevronRight" onBackground="brand-weak" />
                </Flex>
              </SmartLink>

              <SmartLink
                href="https://www.upwork.com/freelancers/~0165742d84eaccc7e1?mp_source=share"
                style={{ textDecoration: 'none' }}
                unstyled
                target="_blank"
                rel="noopener noreferrer"
              >
                <Flex
                  fitWidth
                  border="brand-alpha-medium"
                  style={{ backdropFilter: 'blur(var(--static-space-1))' }}
                  background="brand-alpha-weak"
                  radius="full"
                  padding="4"
                  gap="8"
                  vertical="center"
                  cursor="pointer"
                  transition="micro-medium"
                >
                  <Icon
                    paddingLeft="12"
                    name="briefcase"
                    onBackground="brand-weak"
                  />
                  <Flex paddingX="8">Hire me on Upwork</Flex>
                  <Icon name="chevronRight" onBackground="brand-weak" />
                </Flex>
              </SmartLink>
            </Flex>

            <Heading className={styles.textAlign} variant="display-strong-xl">
              {person.name}
            </Heading>
            <Text
              className={styles.textAlign}
              variant="display-default-xs"
              onBackground="neutral-weak"
            >
              {person.role + ' - MSc of CS'}
            </Text>

            {social.length > 0 && (
              <Flex
                className={styles.blockAlign}
                paddingTop="20"
                paddingBottom="8"
                gap="8"
                wrap
                horizontal="center"
                fitWidth
                data-border="rounded"
              >
                {social.map((item) =>
                  item.link ? (
                    <React.Fragment key={item.name}>
                      <Button
                        className="s-flex-hide"
                        href={item.link}
                        prefixIcon={item.icon}
                        label={item.name}
                        size="s"
                        weight="default"
                        variant="secondary"
                      />
                      <IconButton
                        className="s-flex-show"
                        size="l"
                        href={item.link}
                        icon={item.icon}
                        variant="secondary"
                      />
                    </React.Fragment>
                  ) : null,
                )}
              </Flex>
            )}
          </Column>

          {about.intro.display && (
            <Column
              textVariant="body-default-l"
              fillWidth
              gap="m"
              marginBottom="xl"
            >
              <>
                I'm a computer engineer and AI enthusiast focused on turning
                ideas into smart, real-world software. My work spans full-stack
                systems, machine learning projects, and clean user interfaces. I
                enjoy building things that make a difference.
              </>
            </Column>
          )}

          {about.work.display && (
            <>
              <Heading
                as="h2"
                id={about.work.title}
                variant="display-strong-s"
                marginBottom="m"
              >
                {about.work.title}
              </Heading>
              <Column fillWidth gap="l" marginBottom="40">
                {about.work.experiences.map((experience, index) => (
                  <Column
                    key={`${experience.company}-${experience.role}-${index}`}
                    fillWidth
                  >
                    <Flex
                      fillWidth
                      horizontal="space-between"
                      vertical="end"
                      marginBottom="4"
                    >
                      <Text id={experience.company} variant="heading-strong-l">
                        {experience.company}
                      </Text>
                      <Text
                        variant="heading-default-xs"
                        onBackground="neutral-weak"
                      >
                        {experience.timeframe}
                      </Text>
                    </Flex>
                    <Text
                      variant="body-default-s"
                      onBackground="brand-weak"
                      marginBottom="m"
                    >
                      {experience.role}
                    </Text>
                    <Column as="ul" gap="4">
                      {experience.achievements.map(
                        (achievement: JSX.Element, idx: number) => (
                          <Text
                            as="li"
                            variant="body-default-m"
                            key={`${experience.company}-achievement-${idx}`}
                          >
                            {achievement}
                          </Text>
                        ),
                      )}
                    </Column>
                    {experience.images.length > 0 && (
                      <Flex
                        fillWidth
                        paddingTop="m"
                        paddingLeft="40"
                        gap="12"
                        wrap
                      >
                        {experience.images.map(
                          (
                            image: {
                              src: string;
                              width: number;
                              height: number;
                              alt: string;
                            },
                            idx: number,
                          ) => (
                            <Flex
                              key={`${image.src}-${idx}`}
                              border="neutral-medium"
                              radius="m"
                              minWidth={image.width}
                              height={image.height}
                            >
                              <Media
                                enlarge
                                radius="m"
                                sizes={image.width.toString()}
                                alt={image.alt}
                                src={image.src}
                              />
                            </Flex>
                          ),
                        )}
                      </Flex>
                    )}
                  </Column>
                ))}
              </Column>
            </>
          )}

          {about.studies.display && (
            <>
              <Heading
                as="h2"
                id={about.studies.title}
                variant="display-strong-s"
                marginBottom="m"
              >
                {about.studies.title}
              </Heading>
              <Column fillWidth gap="l" marginBottom="40">
                {about.studies.institutions.map((institution, idx) => (
                  <Column key={`${institution.name}-${idx}`} fillWidth gap="4">
                    <Text id={institution.name} variant="heading-strong-l">
                      {institution.name}
                    </Text>
                    <Text
                      variant="heading-default-xs"
                      onBackground="neutral-weak"
                    >
                      {institution.description}
                    </Text>
                  </Column>
                ))}
              </Column>
            </>
          )}
          {about.technical.display && (
            <>
              <Heading
                as="h2"
                variant="display-strong-s"
                marginBottom="0"
                marginTop="20"
              >
                {about.technical.title}
              </Heading>
              <TechBadgeGrid />
            </>
          )}
        </Column>
      </Flex>
      <br></br>
      <br></br>
      <br></br>
      {newsletter.display && <Mailchimp />}
    </Column>
  );
}
