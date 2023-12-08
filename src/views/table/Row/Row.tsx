'use client'
import * as React from 'react'
import IconButton from '@mui/material/IconButton'
import TableCell from '@mui/material/TableCell'
import TableRow from '@mui/material/TableRow'
import { IRow } from '@/src/data/table'
import classes from './Table.module.css'
import { tableData } from '@/src/data/table'

export default function Row(props: {
  row: IRow
  privateCheck: boolean
  publicCheck: boolean
  index: number
}) {
  const { row } = props
  const [open, setOpen] = React.useState(false)
  const [temp, setTemp] = React.useState(false)

  return (
    <React.Fragment>
      <TableRow
        sx={{
          '& > *': { borderBottom: 'unset' },
          backgroundColor: row.public ? '#DDEBFF' : '#FFECEF',
          display:
            row.public && !props.publicCheck
              ? 'none'
              : !row.public && !props.privateCheck
              ? 'none'
              : '',
          fontSize: '0px',
        }}
      >
        <TableCell sx={{ padding: '0px !important' }}>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => {
              setOpen(!open)
            }}
          >
            {row.nested ? (
              open ? (
                <img src="/icons/down-arrow.svg" width="20px" alt="" />
              ) : (
                <img src="/icons/right-arrow.svg" width="20px" alt="" />
              )
            ) : (
              ''
            )}
          </IconButton>
        </TableCell>
        <TableCell
          sx={{ padding: '0px !important' }}
          component="th"
          scope="row"
        >
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
            }}
          >
            <div>{row.name}</div>
            <div style={{ opacity: '0' }}>hello</div>
          </div>
        </TableCell>

        <TableCell sx={{ padding: '0px !important' }} align="right">
          <input
            type="number"
            name="add1"
            value={row.calories}
            onChange={(event) => {
              row.calories = parseInt(event.target.value)
              setTemp(!temp)
            }}
            className={classes.input}
          />
        </TableCell>
        <TableCell sx={{ padding: '0px !important' }} align="right">
          {row.fat}
        </TableCell>
        <TableCell sx={{ padding: '0px !important' }} align="right">
          {row.carbs}
        </TableCell>
        <TableCell
          sx={{ paddingRight: '10px', paddingTop: '0px', paddingBottom: '0px' }}
          align="right"
        >
          {row.protein}
        </TableCell>
      </TableRow>
      {row.nested?.map((nestedRow: IRow, index: number) => {
        return (
          <TableRow
            sx={{
              '& > *': { borderBottom: 'unset' },
              backgroundColor: row.public ? '#F9FAFF' : '#FEF7F6',
              transition: 'all 0.3s ease',
              height: open ? '0px' : '',
            }}
            key={index}
          >
            <TableCell
              sx={{
                padding: '0px !important',
                fontSize: open ? '' : '0px',
                borderBottom: open ? '' : '0px',
                height: open ? '' : '0px',
                transition: 'all 0.3s ease',
              }}
            ></TableCell>
            <TableCell
              sx={{
                padding: '0px !important',
                fontSize: open ? '' : '0px',
                borderBottom: open ? '' : '0px',
                height: open ? '' : '0px',
                transition: 'all 0.3s ease',
              }}
              component="th"
              scope="row"
            >
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                }}
              >
                <div>{nestedRow.name}</div>
                <div>hello</div>
              </div>
            </TableCell>
            <TableCell
              sx={{
                padding: '0px !important',
                fontSize: open ? '' : '0px',
                borderBottom: open ? '' : '0px',
                // height: open ? '' : '0px',
                transition: 'all 0.3s ease',
              }}
              align="right"
            >
              <input
                type="number"
                name="add1"
                value={nestedRow.calories}
                onChange={(event) => {
                  nestedRow.calories = parseInt(event.target.value)
                  setTemp(!temp)
                }}
                className={classes.input}
                style={{
                  height: open ? '' : '0px',
                  transition: 'all 0.3s ease',
                  fontSize: open ? '' : '0px',
                  padding: open ? '' : '0px',
                }}
              />
            </TableCell>
            <TableCell
              sx={{
                padding: '0px !important',
                fontSize: open ? '' : '0px',
                transition: 'all 0.3s ease',
                borderBottom: open ? '' : '0px',
                height: open ? '' : '0px',
              }}
              align="right"
            >
              {nestedRow.fat}
            </TableCell>
            <TableCell
              sx={{
                padding: '0px !important',
                fontSize: open ? '' : '0px',
                transition: 'all 0.3s ease',
                borderBottom: open ? '' : '0px',
                height: open ? '' : '0px',
              }}
              align="right"
            >
              {nestedRow.carbs}
            </TableCell>
            <TableCell
              sx={{
                paddingRight: '10px',
                paddingTop: '0px',
                paddingBottom: '0px',
                fontSize: open ? '' : '0px',
                transition: 'all 0.3s ease',
                borderBottom: open ? '' : '0px',
                height: open ? '' : '0px',
              }}
              align="right"
            >
              {nestedRow.protein}
            </TableCell>
          </TableRow>
        )
      })}
    </React.Fragment>
  )
}
