import type { NavItemConfig } from '@/types/nav';
import { paths } from '@/paths';

export const navItems = [
  { key: 'overview', title: 'Overview', href: paths.dashboard.overview, icon: 'chart-pie' },
  { key: 'createChatBot', title: 'Create Chatbot', href: paths.dashboard.createChatBot, icon: 'users' },
  { key: 'listKnowledge', title: 'List Knowledge File', href: paths.dashboard.listKnowLedge, icon: 'user' },
  { key: 'addKnowledgeFile', title: 'Add Knowledge File', href: paths.dashboard.addKnowledgeFile, icon: 'plugs-connected' },
  { key: 'settings', title: 'Settings', href: paths.dashboard.settings, icon: 'gear-six' },
  { key: 'error', title: 'Error', href: paths.errors.notFound, icon: 'x-square' },
] satisfies NavItemConfig[];
