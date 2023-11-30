'use client'
import * as React from 'react'
import Box from '@mui/material/Box'
import Collapse from '@mui/material/Collapse'
import IconButton from '@mui/material/IconButton'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Typography from '@mui/material/Typography'
import Paper from '@mui/material/Paper'

function createData(
  name: string,
  calories: number,
  fat: number,
  carbs: number,
  protein: number,
  price: number
) {
  return {
    name,
    calories,
    fat,
    carbs,
    protein,
    price,
    history: [
      {
        date: '2020-01-05',
        customerId: '11091700',
        amount: 3,
      },
      {
        date: '2020-01-02',
        customerId: 'Anonymous',
        amount: 1,
      },
    ],
  }
}

function Row(props: { row: ReturnType<typeof createData> }) {
  const { row } = props
  const [open, setOpen] = React.useState(false)

  return (
    <React.Fragment>
      <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
        <TableCell sx={{ padding: '0px !important' }}>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? (
              <p style={{ margin: '0px' }}>C</p>
            ) : (
              <p style={{ margin: '0px' }}>O</p>
            )}
          </IconButton>
        </TableCell>
        <TableCell
          sx={{ padding: '0px !important' }}
          component="th"
          scope="row"
        >
          {row.name}
        </TableCell>
        <TableCell sx={{ padding: '0px !important' }} align="right">
          {row.calories}
        </TableCell>
        <TableCell sx={{ padding: '0px !important' }} align="right">
          {row.fat}
        </TableCell>
        <TableCell sx={{ padding: '0px !important' }} align="right">
          {row.carbs}
        </TableCell>
        <TableCell sx={{ padding: '0px !important' }} align="right">
          {row.protein}
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell
          sx={{ padding: '0px !important' }}
          style={{ paddingBottom: 0, paddingTop: 0 }}
          colSpan={6}
        >
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box>
              <Table aria-label="collapsible table">
                {/* <TableHead>
                  <TableRow sx={{ backgroundColor: 'grey' }}>
                    <TableCell
                      sx={{
                        padding: '0px !important',
                        width: '76.25px !important',
                      }}
                    >
                      {' '}
                    </TableCell>
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
                    <TableCell sx={{ padding: '0px !important' }} align="right">
                      Protein&nbsp;(g)
                    </TableCell>
                  </TableRow>
                </TableHead> */}
                <TableBody>
                  <Row1 key={row.name} row={row} />
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  )
}
function Row1(props: { row: ReturnType<typeof createData> }) {
  const { row } = props
  return (
    <React.Fragment>
      <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
        <TableCell
          sx={{ padding: '0px !important', width: '76.25px !important' }}
        >
          {' '}
        </TableCell>
        <TableCell
          sx={{ padding: '0px !important' }}
          component="th"
          scope="row"
        >
          {row.name}
        </TableCell>
        <TableCell sx={{ padding: '0px !important' }} align="right">
          {row.calories}
        </TableCell>
        <TableCell sx={{ padding: '0px !important' }} align="right">
          {row.fat}
        </TableCell>
        <TableCell sx={{ padding: '0px !important' }} align="right">
          {row.carbs}
        </TableCell>
        <TableCell sx={{ padding: '0px !important' }} align="right">
          {row.protein}
        </TableCell>
      </TableRow>
    </React.Fragment>
  )
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0, 3.99),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3, 4.99),
  createData('Eclair', 262, 16.0, 24, 6.0, 3.79),
  createData('Cupcake', 305, 3.7, 67, 4.3, 2.5),
  createData('Gingerbread', 356, 16.0, 49, 3.9, 1.5),
]

export default function CollapsibleTable() {
  return (
    <TableContainer component={Paper}>
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow sx={{ backgroundColor: 'grey' }}>
            <TableCell sx={{ padding: '0px !important' }} />
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
            <TableCell sx={{ padding: '0px !important' }} align="right">
              Protein&nbsp;(g)
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <Row key={row.name} row={row} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}
