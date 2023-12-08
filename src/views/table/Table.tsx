'use client'
import * as React from 'react'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'
import { tableData } from '@/src/data/table'
import { IRow } from '@/src/data/table'
import { Checkbox, FormControlLabel } from '@mui/material'
import classes from './Table.module.css'
import Row from './Row/Row'

interface SumResult {
  publicSum: number
  privateSum: number
}

function sumCalories(data: IRow[]): SumResult {
  let publicSum = 0
  let privateSum = 0

  for (const row of data) {
    if (row.public) {
      publicSum += row.calories
      if (row.nested) {
        for (const nestedRow of row.nested) {
          publicSum += nestedRow.calories
        }
      }
    } else {
      privateSum += row.calories
      if (row.nested) {
        for (const nestedRow of row.nested) {
          privateSum += nestedRow.calories
        }
      }
    }
  }

  return { publicSum, privateSum }
}

export default function CollapsibleTable() {
  const [publicCheck, setPublic] = React.useState(true)
  const [privateCheck, setPrivate] = React.useState(false)
  const handlePrivateChange = () => {
    if (!privateCheck) {
      setPrivate(!privateCheck)
    } else if (publicCheck) {
      setPrivate(!privateCheck)
    }
  }

  const handlePublicChange = () => {
    if (!publicCheck) {
      setPublic(!publicCheck)
    } else if (privateCheck) {
      setPublic(!publicCheck)
    }
  }
  const sum = sumCalories(tableData)
  return (
    <div
      style={{
        margin: '20px',
      }}
    >
      <div>
        <FormControlLabel
          control={
            <Checkbox
              checked={privateCheck}
              onChange={handlePrivateChange}
              sx={{
                color: '#FF6B76',
                '&.Mui-checked': {
                  color: '#FF6B76',
                },
              }}
            />
          }
          label="Private"
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={publicCheck}
              onChange={handlePublicChange}
              sx={{
                color: '#0087ED',
                '&.Mui-checked': {
                  color: '#0087ED',
                },
              }}
            />
          }
          label="Public"
        />
      </div>
      <TableContainer component={Paper} sx={{ borderWidth: '0px' }}>
        <Table aria-label="collapsible table">
          <TableHead>
            <TableRow sx={{ backgroundColor: '#F6FBFF' }}>
              <TableCell sx={{ padding: '0px !important', width: '20px' }} />
              <TableCell sx={{ padding: '0px !important' }}>
                Dessert (100g serving)
              </TableCell>
              <TableCell sx={{ padding: '0px !important' }} align="right">
                Calories
              </TableCell>
              <TableCell sx={{ padding: '0px !important' }} align="right">
                Fat&nbsp;(g)
              </TableCell>
              <TableCell sx={{ padding: '0px !important' }} align="right">
                Carbs&nbsp;(g)
              </TableCell>
              <TableCell
                sx={{
                  paddingRight: '10px',
                  paddingTop: '0px',
                  paddingBottom: '0px',
                }}
                align="right"
              >
                Protein&nbsp;(g)
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {tableData.map((row, index) => (
              <Row
                key={row.name}
                row={row}
                privateCheck={privateCheck}
                publicCheck={publicCheck}
                index={index}
              />
            ))}
          </TableBody>
        </Table>
        <div
          style={{
            display: 'flex',
            gap: '20px',
            justifyContent: 'flex-end',
            backgroundColor: '#E7F0F3',
            paddingRight: '10px',
          }}
        >
          <div style={{ color: '#FF6B76' }}>Private ${sum.privateSum}</div>
          <div style={{ color: '#0087ED' }}>Public ${sum.publicSum}</div>
          <div>Total ${sum.privateSum + sum.publicSum}</div>
        </div>
      </TableContainer>
    </div>
  )
}
