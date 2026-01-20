import { Container } from '../ui/Container';
import { Section } from '../ui/Section';
import { Button } from '../ui/Button';
import { SectionHeader } from '../ui/SectionHeader';
import { FeatureCard } from '../ui/FeatureCard';

export function About() {
  return (
    <Section id="about">
      <Container size="wide" padded={false}>
        <div className="glass-panel rounded-[2.5rem] p-8 md:p-16">
          <div className="flex flex-col gap-12">
            <div className="mx-auto max-w-175 text-center">
              <SectionHeader
                title="About me"
                subtitle="Design Meets Logic"
                subtitleAs="h3"
              >
                <p className="mb-10">
                  I believe great software is built at the intersection of
                  usability and engineering. With a full stack background, I
                  work across front-end and back-end to build web applications
                  that are both intuitive to use and technically solid.
                </p>

                <p>
                  My experience includes building user interfaces, developing
                  APIs, integrating external services, and working with
                  databases, always focusing on clean code, maintainability, and
                  real-world requirements.
                </p>
              </SectionHeader>

              <div className="mt-8">
                <Button
                  variant="primary"
                  as="a"
                  href="www.linkedin.com/in/soniavilleda"
                  className="inline-flex hover:-translate-y-0.5"
                >
                  <span className="material-symbols-outlined text-[20px]">
                    download
                  </span>
                  Download CV
                </Button>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
              <FeatureCard
                icon="brush"
                title="Front-end Development"
                description="Creating responsive and accessible user interfaces using React
                  and modern JavaScript, with a strong focus on usability and
                  clean component structure."
                iconBg="bg-gradient-to-br from-pink-100 to-pink-50"
              />

              <FeatureCard
                icon="terminal"
                title="Backend Logic"
                description="Developing APIs and backend services with Node.js, handling
                  business logic, data persistence, and integrations that
                  support scalable applications."
                iconBg="bg-gradient-to-br from-purple-100 to-purple-50"
                iconColor="text-secondary"
              />

              <FeatureCard
                icon="layers"
                title="Product & UX Thinking"
                description="Applying UX principles to ensure applications are easy to use,
                  performant, and aligned with real user and product needs."
                iconBg="bg-gradient-to-br from-blue-100 to-blue-50"
                iconColor="text-blue-500"
              />
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
