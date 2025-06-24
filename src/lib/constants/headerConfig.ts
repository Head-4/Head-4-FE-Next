const defaultConfig = {
  title: '',
  showNavMenu: false,
  showBackButton: true,
}

export const getHeaderConfig = (pathname: string) => {
  const configMap: Record<string, Partial<typeof defaultConfig>> = {
    '/': {
      title: '상명대학교',
      showNavMenu: true,
      showBackButton: false,
    },
    '/notification': {
      title: '알림',
    },
    '/search': {
      title: '',
    },
    '/setting/keyword': {
      title: '키워드 설정',
    },
    '/setting/university': {
      title: '학교 설정',
    },
    '/signup': {
      title: '',
    },
    '/login': {
      title: '',
      showBackButton: false,
    },
  }

  return { ...defaultConfig, ...configMap[pathname] }
}
