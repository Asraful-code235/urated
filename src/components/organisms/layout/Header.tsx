import type { HeaderProps } from '@/types';
import { NavigationMenu } from '@/components/molecules/navigation/NavigationMenu';
import { cn } from '@/lib/utils';

export function Header({ navigation, className }: HeaderProps) {
  return (
    <header className={cn('relative z-10 w-full bg-black/80 backdrop-blur-sm', className)}>
      <NavigationMenu {...navigation} />
    </header>
  );
}
