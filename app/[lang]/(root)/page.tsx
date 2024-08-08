"use client"

import * as React from 'react';
import type { Metadata } from 'next';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { Download as DownloadIcon } from '@phosphor-icons/react/dist/ssr/Download';
import { Plus as PlusIcon } from '@phosphor-icons/react/dist/ssr/Plus';
import { Upload as UploadIcon } from '@phosphor-icons/react/dist/ssr/Upload';
import dayjs from 'dayjs';

import { config } from '@/config';
import { CustomersFilters } from '@/components/dashboard/home/customers-filters';
import { ChatBotsTable, SingleChatbot } from '@/components/dashboard/home/chatbots-table';
import { useRouter } from 'next/navigation';
import { paths } from '@/paths';

// export const metadata = { title: `Customers | Dashboard | ${config.site.name}` } satisfies Metadata;

const customers = [
  {
    id: 'USR-010',
    name: 'Alcides Antonio',
    model: 'command-r-plus',
    apiKey: '908-691-3242',
    createdAt: dayjs().subtract(2, 'hours').toDate(),
  },
  {
    id: 'USR-009',
    name: 'Marcus Finn',
    model: 'command-r-plus',
    apiKey: '415-907-2647',
    createdAt: dayjs().subtract(2, 'hours').toDate(),
  },
  {
    id: 'USR-008',
    name: 'Jie Yan',
    model: 'command-r-plus',
    apiKey: '770-635-2682',
    createdAt: dayjs().subtract(2, 'hours').toDate(),
  },
  {
    id: 'USR-007',
    name: 'Nasimiyu Danai',
    model: 'command-r-plus',
    apiKey: '801-301-7894',
    createdAt: dayjs().subtract(2, 'hours').toDate(),
  },
  {
    id: 'USR-006',
    name: 'Iulia Albu',
    model: 'command-nightly',
    apiKey: '313-812-8947',
    createdAt: dayjs().subtract(2, 'hours').toDate(),
  },
  {
    id: 'USR-005',
    name: 'Fran Perez',
    model: 'command-nightly',
    apiKey: '712-351-5711',
    createdAt: dayjs().subtract(2, 'hours').toDate(),
  },

  {
    id: 'USR-004',
    name: 'Penjani Inyene',
    model: 'command-nightly',
    apiKey: '858-602-3409',
    createdAt: dayjs().subtract(2, 'hours').toDate(),
  },
  {
    id: 'USR-003',
    name: 'Carson Darrin',
    model: 'command-nightly',
    apiKey: '304-428-3097',
    createdAt: dayjs().subtract(2, 'hours').toDate(),
  },
  {
    id: 'USR-002',
    name: 'Siegbert Gottfried',
    model: 'command-nightly',
    apiKey: '702-661-1654',
    createdAt: dayjs().subtract(2, 'hours').toDate(),
  },
  {
    id: 'USR-001',
    name: 'Miron Vitold',
    model: 'command-nightly',
    apiKey: '972-333-4106',
    createdAt: dayjs().subtract(2, 'hours').toDate(),
  },
] satisfies SingleChatbot[];

export default function Page(): React.JSX.Element {
  const route = useRouter();
  const page = 0;
  const rowsPerPage = 5;

  const paginatedCustomers = applyPagination(customers, page, rowsPerPage);


  const navigateToCreate = () => {
    route.push(paths.dashboard.createChatBot)
  }

  return (
    <Stack spacing={3}>
      <Stack direction="row" spacing={3}>
        <Stack spacing={1} sx={{ flex: '1 1 auto' }}>
          <Typography variant="h4">AI Chatbot List</Typography>
        </Stack>
        <div>
          <Button onClick={navigateToCreate} startIcon={<PlusIcon fontSize="var(--icon-fontSize-md)" />} variant="contained">
            Create AI Chat Bot
          </Button>
        </div>
      </Stack>
      <ChatBotsTable
        count={paginatedCustomers.length}
        page={page}
        rows={paginatedCustomers}
        rowsPerPage={rowsPerPage}
      />
    </Stack>
  );
}

function applyPagination(rows: SingleChatbot[], page: number, rowsPerPage: number): SingleChatbot[] {
  return rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage);
}
