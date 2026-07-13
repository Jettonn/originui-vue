<script setup lang="ts">
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from '@/components/ui/Table'

const invoices = [
  { invoice: 'INV001', status: 'Paid', method: 'Credit Card', amount: '$250.00' },
  { invoice: 'INV002', status: 'Pending', method: 'PayPal', amount: '$150.00' },
  { invoice: 'INV003', status: 'Unpaid', method: 'Bank Transfer', amount: '$350.00' },
  { invoice: 'INV004', status: 'Paid', method: 'Credit Card', amount: '$450.00' }
]
</script>

<template>
  <div class="w-full max-w-md">
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Invoice</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Method</TableHead>
          <TableHead class="text-right">Amount</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow v-for="invoice in invoices" :key="invoice.invoice">
          <TableCell class="font-medium">{{ invoice.invoice }}</TableCell>
          <TableCell>{{ invoice.status }}</TableCell>
          <TableCell>{{ invoice.method }}</TableCell>
          <TableCell class="text-right">{{ invoice.amount }}</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  </div>
</template>
