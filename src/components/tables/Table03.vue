<script setup lang="ts">
import Badge from '@/components/ui/Badge.vue'
import { Frame } from '@/components/ui/Frame'
import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow
} from '@/components/ui/Table'

const projects = [
  { project: 'Website Redesign', dot: 'bg-emerald-500', status: 'Paid', team: 'Frontend Team', budget: '$12,500' },
  { project: 'Mobile App', dot: 'bg-muted-foreground/64', status: 'Unpaid', team: 'Mobile Team', budget: '$8,750' },
  { project: 'API Integration', dot: 'bg-amber-500', status: 'Pending', team: 'Backend Team', budget: '$5,200' },
  { project: 'Database Migration', dot: 'bg-emerald-500', status: 'Paid', team: 'DevOps Team', budget: '$3,800' },
  { project: 'User Dashboard', dot: 'bg-emerald-500', status: 'Paid', team: 'UX Team', budget: '$7,200' },
  { project: 'Security Audit', dot: 'bg-red-500', status: 'Failed', team: 'Security Team', budget: '$2,100' }
]
</script>

<template>
  <Frame class="w-full max-w-2xl">
    <Table variant="card">
      <TableHeader>
        <TableRow>
          <TableHead>Project</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Team</TableHead>
          <TableHead class="text-right">Budget</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow v-for="row in projects" :key="row.project">
          <TableCell class="font-medium">{{ row.project }}</TableCell>
          <TableCell>
            <Badge variant="outline">
              <span aria-hidden="true" :class="['size-1.5 rounded-full', row.dot]" />
              {{ row.status }}
            </Badge>
          </TableCell>
          <TableCell>{{ row.team }}</TableCell>
          <TableCell class="text-right">{{ row.budget }}</TableCell>
        </TableRow>
      </TableBody>
      <TableFooter>
        <TableRow>
          <TableCell :colspan="3">Total Budget</TableCell>
          <TableCell class="text-right">$39,550</TableCell>
        </TableRow>
      </TableFooter>
    </Table>
  </Frame>
</template>
