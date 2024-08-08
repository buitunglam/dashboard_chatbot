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
          <Typography variant="h4"> Create Chat Bot</Typography>
        </Stack>
      </Stack>

      <Card className='flex flex-col p-8'>
        {/* <div className='text-[20px] font-normal mb-3'>Information</div> */}
        <div className='mb-4 flex items-center gap-2'>
          <p className='font-medium w-[100px]'>ID</p>
          <span>2344653464542345</span>
        </div>

        <Box className='flex items-center gap-3 mb-[20px] w-full'>
          <p className='mb-1.5 w-[100px] font-medium'>Name(*)</p>
          <input
            className='w-1/2 h-[40px] border border-gray-400 p-2 outline-none rounded-[7px] max-md:w-full'
            type="email"
            autoComplete="current-password"
          />
        </Box>

        <Box className='flex items-center gap-3 mb-[20px] w-full'>
          <p className='mb-1.5 w-[100px] font-medium'>Model(*)</p>
          <RadioGroup
            row
            aria-labelledby="demo-row-radio-buttons-group-label"
            name="row-radio-buttons-group"
          >
            <FormControlLabel value="command-r-plus" control={<Radio />} label="command-r-plus" />
            <FormControlLabel value="command-nightly" control={<Radio />} label="command-nightly" />
          </RadioGroup>
        </Box>

        <Box className="flex justify-between items-center w-full gap-[20px] pl-[15px] flex-1 max-md:flex-col max-md:items-start ">
          <Box className='flex flex-col gap-3 mb-[20px] w-1/2 max-md:w-full'>
            <p className='mb-1.5 font-medium'>API Key(*)</p>
            <input
              className='w-full h-[40px] border border-gray-400 p-2 outline-none rounded-[7px]'
              type="email"
              autoComplete="current-password"
            />
          </Box>
          <Box className='flex flex-col gap-3 mb-[20px] w-1/2 max-md:w-full'>
            <p className='mb-1.5 font-medium'>Connector API URl(*)</p>
            <input
              className='w-full h-[40px] border border-gray-400 p-2 outline-none rounded-[7px]'
              type="email"
              autoComplete="current-password"
            />
          </Box>
        </Box>

        <Box className="flex justify-between items-center w-full gap-[20px] pl-[15px] flex-1  max-md:flex-col max-md:items-start">
          <Box className='flex flex-col gap-3 mb-[20px] w-1/2 max-md:w-full'>
            <p className='mb-1.5 font-medium'>Connector API Key(*)</p>
            <input
              className='w-full h-[40px] border border-gray-400 p-2 outline-none rounded-[7px]'
              type="email"
              autoComplete="current-password"
            />
          </Box>
          <Box className='flex flex-col gap-3 mb-[20px] w-1/2 max-md:w-full'>
            <p className='mb-1.5 font-medium'>Web Search URL</p>
            <input
              className='w-full h-[40px] border border-gray-400 p-2 outline-none rounded-[7px]'
              type="email"
              autoComplete="current-password"
            />
          </Box>
        </Box>

        <Box className="flex justify-between items-center w-full gap-[20px] pl-[15px] flex-1  max-md:flex-col max-md:items-start">
          <Box className='flex flex-col gap-3 mb-[20px] flex-1 w-1/2 max-md:w-full'>
            <p className='mb-1.5 font-medium'>Character Image</p>

            <select className='w-full h-[40px] border border-gray-400 p-2 outline-none rounded-[7px]' name="cars" id="cars">
              <option value="volvo">Image 1</option>
              <option value="saab">Image 2</option>
              <option value="opel">Image 3</option>
              <option value="audi">Image 4</option>
            </select>
          </Box>
          <Box className='flex flex-col gap-3 mb-[20px] flex-1 w-1/2 max-md:w-full'>
            <p className='mb-1.5 font-medium'>Background Image</p>
            <select className='w-full h-[40px] border border-gray-400 p-2 outline-none rounded-[7px]' name="cars" id="cars">
              <option value="volvo">Background Image 1</option>
              <option value="saab">Background Image 2</option>
              <option value="opel">Background Image 3</option>
              <option value="audi">Background Image 4</option>
            </select>
          </Box>
        </Box>

        <Box className="flex justify-between items-center w-1/2 gap-[20px] pl-[15px] flex-1  max-md:flex-col max-md:items-start">
          <Box className='flex flex-col gap-3 mb-[20px] flex-1 w-full max-md:w-full'>
            <p className='mb-1.5 font-medium'>Knowledge File</p>

            <select className='w-full h-[40px] border border-gray-400 p-2 outline-none rounded-[7px]' name="cars" id="cars">
              <option value="volvo">File 1</option>
              <option value="saab">File 2</option>
              <option value="opel">File 3</option>
              <option value="audi">File 4</option>
            </select>
          </Box>
        </Box>

        <Box className="flex justify-between items-center w-full gap-[20px] pl-[15px] mb-[20px] flex-1  max-md:flex-col max-md:items-start">
          <Box className='flex flex-col gap-3 mb-[20px] flex-1 w-1/2 max-md:w-full'>
            <p className='mb-1.5 font-medium'>Custom Prompt</p>
            <textarea className='w-full h-[100px] resize-none border border-gray-400 p-2 outline-none rounded-[7px]' name="custom_prompt" rows={4} cols={50} />
          </Box>
        </Box>

        <Button className='w-1/2 m-auto self-center' variant="contained">
          Create
        </Button>
      </Card>

    </Stack>
  );
}
