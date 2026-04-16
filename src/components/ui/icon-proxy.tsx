import { HugeiconsIcon } from '@hugeicons/react';
import * as CoreIcons from '@hugeicons/core-free-icons';

// Create a Proxy or wrap common icons
export function IconProxy({ name, ...props }: { name: string } & Record<string, unknown>) {
  const icons = CoreIcons as unknown as Record<string, unknown>;
  const iconObj = icons[name] || icons[name + 'Icon'];
  if (!iconObj) return null;
  return <HugeiconsIcon icon={iconObj as never} {...props} />;
}
