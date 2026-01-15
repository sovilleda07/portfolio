import { Section } from '../ui/Section';
import { Container } from '../ui/Container';

export function Skills() {
  return (
    <Section id="skills" size="tight">
      <Container size="wide" padded={false}>
        <div className="flex flex-col items-center gap-12">
          <div className="text-center">
            <h2 className="mb-3 text-xs font-bold uppercase tracking-widest text-primary">
              Expertise
            </h2>
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">My Toolkit</h2>
            <p className="mx-auto max-w-lg text-slate-500">
              A curated stack of technologies for building robust and scalable
              applications.
            </p>
          </div>

          <div className="grid w-full grid-cols-1 gap-6 px-4 lg:grid-cols-3 lg:gap-8">
            <div className="rounded-[2.5rem] bg-white p-10 shadow-lg transition-all duration-300 hover:shadow-xl">
              <div className="mb-10 flex flex-col gap-1">
                <div className="mb-4 flex size-16 items-center justify-center rounded-3xl bg-pink-100 text-pink-500">
                  <span className="material-symbols-outlined text-[28px]">
                    web
                  </span>
                </div>
                <h3 className="text-[28px] font-bold leading-tight text-slate-900">
                  Front-End
                </h3>
                <p className="text-sm font-bold uppercase tracking-widest text-slate-400">
                  Client Side
                </p>
              </div>

              <div className="space-y-6">
                {[
                  ['html', 'HTML5', 'text-orange-500'],
                  ['css', 'CSS3 / SASS', 'text-blue-500'],
                  ['javascript', 'JavaScript (ES6+)', 'text-yellow-500'],
                  ['grid_view', 'Bootstrap', 'text-indigo-500'],
                  ['code', 'React', 'text-cyan-500'],
                ].map(([icon, label, color]) => (
                  <div key={label} className="group flex items-center gap-5">
                    <div
                      className={`flex size-10 shrink-0 items-center justify-center ${color}`}
                    >
                      <span className="material-symbols-outlined text-[28px]">
                        {icon}
                      </span>
                    </div>
                    <span className="text-lg font-bold text-slate-700 transition-colors group-hover:text-current">
                      {label}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[2.5rem] bg-white p-10 shadow-lg transition-all duration-300 hover:shadow-xl">
              <div className="mb-10 flex flex-col gap-1">
                <div className="mb-4 flex size-16 items-center justify-center rounded-3xl bg-purple-100 text-purple-500">
                  <span className="material-symbols-outlined text-[28px]">
                    dns
                  </span>
                </div>
                <h3 className="text-[28px] font-bold leading-tight text-slate-900">
                  Back-End
                </h3>
                <p className="text-sm font-bold uppercase tracking-widest text-slate-400">
                  Server Side
                </p>
              </div>

              <div className="space-y-6">
                {[
                  ['terminal', 'Node.js', 'text-green-500'],
                  ['settings_ethernet', 'Express.js', 'text-slate-600'],
                  ['php', 'PHP', 'text-indigo-400'],
                  ['diamond', 'Laravel', 'text-red-400'],
                  ['api', 'REST APIs', 'text-blue-500'],
                  ['deployed_code', 'Docker', 'text-sky-500'],
                  ['commit', 'Git', 'text-red-500'],
                ].map(([icon, label, color]) => (
                  <div key={label} className="group flex items-center gap-5">
                    <div
                      className={`flex size-10 shrink-0 items-center justify-center ${color}`}
                    >
                      <span className="material-symbols-outlined text-[28px]">
                        {icon}
                      </span>
                    </div>
                    <span className="text-lg font-bold text-slate-700 transition-colors group-hover:text-current">
                      {label}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[2.5rem] bg-white p-10 shadow-lg transition-all duration-300 hover:shadow-xl">
              <div className="mb-10 flex flex-col gap-1">
                <div className="mb-4 flex size-16 items-center justify-center rounded-3xl bg-blue-100 text-blue-500">
                  <span className="material-symbols-outlined text-[28px]">
                    database
                  </span>
                </div>
                <h3 className="text-[28px] font-bold leading-tight text-slate-900">
                  Database
                </h3>
                <p className="text-sm font-bold uppercase tracking-widest text-slate-400">
                  Data Management
                </p>
              </div>

              <div className="space-y-6">
                {[
                  ['table_chart', 'MySQL', 'text-blue-700'],
                  ['storage', 'PostgreSQL', 'text-blue-600'],
                  ['dataset', 'MS SQL', 'text-red-600'],
                  ['eco', 'MongoDB', 'text-green-600'],
                ].map(([icon, label, color]) => (
                  <div key={label} className="group flex items-center gap-5">
                    <div
                      className={`flex size-10 shrink-0 items-center justify-center ${color}`}
                    >
                      <span className="material-symbols-outlined text-[28px]">
                        {icon}
                      </span>
                    </div>
                    <span className="text-lg font-bold text-slate-700 transition-colors group-hover:text-current">
                      {label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
