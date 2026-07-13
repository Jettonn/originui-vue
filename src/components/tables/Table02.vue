<script setup lang="ts">
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow
} from '@/components/ui/Table'
import Badge from '@/components/ui/Badge.vue'

const invoices = [
  { invoice: 'INV001', status: 'success', label: 'Paid', amount: '$250.00' },
  { invoice: 'INV002', status: 'warning', label: 'Pending', amount: '$150.00' },
  { invoice: 'INV003', status: 'error', label: 'Unpaid', amount: '$350.00' },
  { invoice: 'INV004', status: 'success', label: 'Paid', amount: '$450.00' }
] as const
</script>

<template>
  <div class="w-full max-w-lg">
    <Table>
      <TableCaption>A list of your recent invoices.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>Invoice</TableHead>
          <TableHead>Status</TableHead>
          <TableHead class="text-right">Amount</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow v-for="invoice in invoices" :key="invoice.invoice">
          <TableCell class="font-medium">{{ invoice.invoice }}</TableCell>
          <TableCell>
            <Badge :variant="invoice.status">{{ invoice.label }}</Badge>
          </TableCell>
          <TableCell class="text-right">{{ invoice.amount }}</TableCell>
        </TableRow>
      </TableBody>
      <TableFooter>
        <TableRow>
          <TableCell colspan="2">Total</TableCell>
          <TableCell class="text-right">$1,200.00</TableCell>
        </TableRow>
      </TableFooter>
    </Table>
  </div>
</template>
