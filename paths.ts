export const paths = {
  home: '/',
  auth: { signIn: '/auth/sign-in', signUp: '/auth/sign-up', resetPassword: '/auth/reset-password' },
  dashboard: {
    overview: '/',
    listKnowLedge: '/list-knowledge',
    createChatBot: '/create-chatbot',
    addKnowledgeFile: '/add-knowledge',
    settings: '/settings',
    account: '/account',
    editChatBot: "/edit-chatbot",
    editKnowledgeFile: "/edit-knowledge-file"
  },
  errors: { notFound: '/errors/not-found' },
} as const;
