'use client';

import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Checkbox from '@mui/material/Checkbox';
import Divider from '@mui/material/Divider';
import Stack from '@mui/material/Stack';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import dayjs from 'dayjs';

import { useSelection } from '@/hooks/use-selection';
import { Button } from '@mui/material';
import { Plus as PlusIcon } from '@phosphor-icons/react/dist/ssr/Plus';
import DialogDelete from '../layout/dialog-delete';
import { useRouter } from 'next/navigation';
import { paths } from '@/paths';
function noop(): void {
  // do nothing
}

export interface SingleFile {
  id: string;
  file: string;
  s3Bucket: string;
}

interface KnowledgeFileTableProps {
  count?: number;
  page?: number;
  rows?: SingleFile[];
  rowsPerPage?: number;
}

export function KnowledgeFilesTable({
  count = 0,
  rows = [],
  page = 0,
  rowsPerPage = 0,
}: KnowledgeFileTableProps): React.JSX.Element {
  const route = useRouter()
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);


  const rowIds = React.useMemo(() => {
    return rows.map((customer) => customer.id);
  }, [rows]);

  const { selectAll, deselectAll, selectOne, deselectOne, selected } = useSelection(rowIds);

  const selectedSome = (selected?.size ?? 0) > 0 && (selected?.size ?? 0) < rows.length;
  const selectedAll = rows.length > 0 && selected?.size === rows.length;

  const openModalDelete = (id: string) => {
    console.log("click ----")
    setOpen(true)
  }

  const handleNavigateToEdit = (id: string) => {
    console.log(id);
    route.push(`${paths.dashboard.editKnowledgeFile}/${id}`)
  }

  return (
    <Card>
      <Box sx={{ overflowX: 'auto' }}>
        <Table sx={{ minWidth: 650 }}>
          <TableHead>
            <TableRow>
              <TableCell>Id</TableCell>
              <TableCell>File</TableCell>
              <TableCell>S3 Bucket</TableCell>
              <TableCell></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => {
              const isSelected = selected?.has(row.id);
              return (
                <TableRow hover key={row.id} selected={isSelected}>
                  <TableCell>
                    <Stack sx={{ alignItems: 'center' }} direction="row" spacing={2}>
                      <Typography variant="subtitle2">{row.id}</Typography>
                    </Stack>
                  </TableCell>
                  <TableCell>{row.file}</TableCell>
                  <TableCell>
                    {row.s3Bucket}
                  </TableCell>

                  <TableCell sx={{ alignItems: 'center', gap: "10px", display: 'flex' }} >
                    <Button variant="contained" onClick={() => handleNavigateToEdit(row.id)}>
                      Edit
                    </Button>
                    <Button onClick={() => openModalDelete(row.id)} variant="contained" color="error">
                      Delete
                    </Button>
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </Box>
      <Divider />
      <TablePagination
        component="div"
        count={count}
        onPageChange={noop}
        onRowsPerPageChange={noop}
        page={page}
        rowsPerPage={rowsPerPage}
        rowsPerPageOptions={[5, 10, 25]}
      />
      <DialogDelete open={open} handleOpen={handleOpen} handleClose={handleClose} />
    </Card>
  );
}
