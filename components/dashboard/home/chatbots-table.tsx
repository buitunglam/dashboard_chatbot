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
import { paths } from '@/paths';
import { useRouter } from 'next/navigation';
function noop(): void {
  // do nothing
}

export interface SingleChatbot {
  id: string;
  name: string;
  model: string;
  apiKey: string;
  createdAt: Date;
}

interface CustomersTableProps {
  count?: number;
  page?: number;
  rows?: SingleChatbot[];
  rowsPerPage?: number;
}

export function ChatBotsTable({
  count = 0,
  rows = [],
  page = 0,
  rowsPerPage = 0,
}: CustomersTableProps): React.JSX.Element {
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
    route.push(`${paths.dashboard.editChatBot}/${id}`)
  }

  const openChatbot = () => {
    window.open("https://www.google.com.vn/?hl=vi");
  }

  return (
    <Card>
      <Box sx={{ overflowX: 'auto' }}>
        <Table sx={{ minWidth: '800px' }}>
          <TableHead>
            <TableRow>
              <TableCell>Id</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Model</TableCell>
              <TableCell>ApiKey</TableCell>
              <TableCell>Created At</TableCell>
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
                  <TableCell>{row.name}</TableCell>
                  <TableCell>
                    {row.model}
                  </TableCell>
                  <TableCell>{row.apiKey}</TableCell>
                  <TableCell>{dayjs(row.createdAt).format('MMM D, YYYY')}</TableCell>
                  <TableCell sx={{ alignItems: 'center', gap: "10px", display: 'flex' }} >
                    <Button variant="contained" onClick={() => handleNavigateToEdit(row.id)}>
                      Edit
                    </Button>
                    <Button onClick={() => openModalDelete(row.id)} variant="contained" color="error">
                      Delete
                    </Button>
                    <Button onClick={() => openChatbot()} variant="contained">
                      Open chatbot
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
