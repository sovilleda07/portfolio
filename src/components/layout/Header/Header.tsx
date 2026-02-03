import { Container } from '../../ui/Container';
import { HeaderLogo } from './HeaderLogo';
import { HeaderNav } from './HeaderNav';
import { HeaderActions } from './HeaderActions';

export function Header() {
  return (
    <div className="sticky top-4 z-50 w-full px-4 md:px-10">
      <Container size="wide" padded={false}>
        <header className="glass-panel flex items-center justify-between rounded-full px-6 py-3 md:grid md:grid-cols-[1fr_auto_1fr]">
          <div className="md:justify-self-start">
            <HeaderLogo />
          </div>

          <div className="md:justify-self-center">
            <HeaderNav />
          </div>

          <div className="md:justify-self-end">
            <HeaderActions />
          </div>
        </header>
      </Container>
    </div>
  );
}
