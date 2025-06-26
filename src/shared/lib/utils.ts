// 유틸, 헬퍼 함수

import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// HOC 네임스페이스화 뭔가 이상해서 잠시 보류

// export function withNamespace<
//   T extends React.ComponentType<any>,
//   U extends Record<string, React.ComponentType<any>>,
// >(
//   Component: T,
//   components: U,
// ): T & {
//   [K in keyof U]: U[K]
// } {
//   Object.assign(Component, components)
//   return Component as T & {
//     [K in keyof U]: U[K]
//   }
// }
