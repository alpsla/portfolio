/**
 * Component: SafetyBanner
 * Author: AR
 * Created: 2025-10-08
 * Modified: 2025-10-08 by AR
 * Description: Banner indicating internal vs public build.
 */
'use client';
import { isInternal } from '../../lib/utils/safety';

export function SafetyBanner() {
  const internal = isInternal();
  return (
    <div className={`w-full text-center text-xs py-2 ${internal ? 'bg-amber-100' : 'bg-blue-100'}`}>
      {internal ? 'Internal build: includes confidential links and materials.' : 'Public build: sensitive materials redacted.'}
    </div>
  );
}


