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
import { Card, FormControlLabel, Radio, RadioGroup, TextField } from '@mui/material';
import { Box } from '@mui/system';

export const metadata = { title: `Customers | Dashboard | ${config.site.name}` } satisfies Metadata;

export default function Page(): React.JSX.Element {

  return (
    <Stack spacing={3}>
      <Stack direction="row" spacing={3}>
        <Stack spacing={1} sx={{ flex: '1 1 auto' }}>
          <Typography variant="h4">Add Knowledge File</Typography>
        </Stack>
      </Stack>

      <Card className='flex flex-col p-8 w-1/2'>
        {/* <div className='text-[20px] font-normal mb-3'>Information</div> */}
        <div className='mb-4 flex items-center gap-2'>
          <p className='font-medium w-[100px]'>ID</p>
          <span>2344653464542345</span>
        </div>

        <Box className='flex items-center gap-3 mb-[20px] w-full'>
          <p className='mb-1.5 w-[100px] font-medium'>File(*)</p>
          <div
            className='flex items-center justify-center w-[70px] h-[70px] border border-gray-200 bg-white shadow-md p-2 outline-none rounded-[7px]'
          >
            <label htmlFor="upload-file">
              <PlusIcon fontSize="var(--icon-fontSize-md)" className='size-5' />
            </label>
            <input type="file" className='absolute border-none opacity-0 -z-1' name={"file"} id="upload-file" />

          </div>
        </Box>

        <Box className='flex items-center gap-3 mb-[30px] w-full'>
          <p className='mb-1.5 w-[100px]  font-medium mr-[5px]'>S3(*)</p>
          <select className='flex-1 h-[40px] border border-gray-400 p-2 outline-none rounded-[7px] max-md:w-full' name="cars" id="cars">
            <option value="volvo">s3:xxxxxxxxx</option>
            <option value="saab">s3:xxxxxxxxx</option>
            <option value="opel">s3:xxxxxxxxx</option>
            <option value="audi">s3:xxxxxxxxx</option>
          </select>
        </Box>

        <Button className='w-1/3 m-auto self-center' variant="contained">
          Upload
        </Button>
      </Card>

    </Stack>
  );
}
