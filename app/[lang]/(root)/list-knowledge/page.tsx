"use client"

import * as React from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { Plus as PlusIcon } from '@phosphor-icons/react/dist/ssr/Plus';

import { SingleChatbot } from '@/components/dashboard/home/chatbots-table';
import { useRouter } from 'next/navigation';
import { paths } from '@/paths';
import { KnowledgeFilesTable, SingleFile } from '@/components/dashboard/list-knowledge/knowledge-files-table';

// export const metadata = { title: `Customers | Dashboard | ${config.site.name}` } satisfies Metadata;

const knowLedgeFiles = [
  {
    id: 'FILE-010',
    file: 'Antonio.csv',
    s3Bucket: 's3:xxxxxxxxx',
  },
  {
    id: 'FILE-009',
    file: 'Finn.csv',
    s3Bucket: 's3:xxxxxxxxx',

  },
  {
    id: 'FILE-008',
    file: 'Yan.csv',
    s3Bucket: 's3:xxxxxxxxx',

  },
  {
    id: 'FILE-007',
    file: 'Danai.csv',
    s3Bucket: 's3:xxxxxxxxx',
  },

] satisfies SingleFile[];

export default function Page(): React.JSX.Element {
  const route = useRouter();
  const page = 0;
  const rowsPerPage = 5;

  const paginatedFiles = applyPagination(knowLedgeFiles, page, rowsPerPage);


  const navigateToAdd = () => {
    route.push(paths.dashboard.addKnowledgeFile)
  }

  return (
    <Stack spacing={3}>
      <Stack direction="row" spacing={3}>
        <Stack spacing={1} sx={{ flex: '1 1 auto' }}>
          <Typography variant="h4">List Knowledge</Typography>
        </Stack>
        <div>
          <Button onClick={navigateToAdd} startIcon={<PlusIcon fontSize="var(--icon-fontSize-md)" />} variant="contained">
            Add Knowledge File
          </Button>
        </div>
      </Stack>
      <KnowledgeFilesTable
        count={paginatedFiles.length}
        page={page}
        rows={knowLedgeFiles}
        rowsPerPage={rowsPerPage}
      />
    </Stack>
  );
}

function applyPagination(rows: SingleFile[], page: number, rowsPerPage: number): SingleFile[] {
  return rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage);
}
