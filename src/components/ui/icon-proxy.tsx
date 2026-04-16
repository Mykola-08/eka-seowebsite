import { HugeiconsIcon } from '@hugeicons/react';
import * as CoreIcons from '@hugeicons/core-free-icons';

// Create a Proxy or wrap common icons
export function IconProxy({ name, ...props }) {
  const iconObj = CoreIcons[name] || CoreIcons[name + 'Icon'];
  if (!iconObj) return null;
  return <HugeiconsIcon icon={iconObj} {...props} />;
}
