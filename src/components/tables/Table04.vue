<script setup lang="ts">
import Badge from '@/components/ui/Badge.vue'
import Checkbox from '@/components/ui/Checkbox.vue'
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
import { computed, ref } from 'vue'

type Status = 'Paid' | 'Unpaid' | 'Pending' | 'Failed'
type Project = { id: string; project: string; status: Status; team: string; budget: number }

const data: Project[] = [
  { id: '1', project: 'Website Redesign', status: 'Paid', team: 'Frontend Team', budget: 12500 },
  { id: '2', project: 'Mobile App', status: 'Unpaid', team: 'Mobile Team', budget: 8750 },
  { id: '3', project: 'API Integration', status: 'Pending', team: 'Backend Team', budget: 5200 },
  { id: '4', project: 'Database Migration', status: 'Paid', team: 'DevOps Team', budget: 3800 },
  { id: '5', project: 'User Dashboard', status: 'Paid', team: 'UX Team', budget: 7200 },
  { id: '6', project: 'Security Audit', status: 'Failed', team: 'Security Team', budget: 2100 }
]

const statusColor: Record<Status, string> = {
  Paid: 'bg-emerald-500',
  Unpaid: 'bg-muted-foreground/64',
  Pending: 'bg-amber-500',
  Failed: 'bg-red-500'
}

const currency = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  maximumFractionDigits: 0,
  minimumFractionDigits: 0
})

const selected = ref<Set<string>>(new Set())

const allSelected = computed(() => data.length > 0 && selected.value.size === data.length)
const someSelected = computed(() => selected.value.size > 0 && !allSelected.value)

const headerState = computed<boolean | 'indeterminate'>(() =>
  allSelected.value ? true : someSelected.value ? 'indeterminate' : false
)

function toggleAll(value: boolean | 'indeterminate') {
  selected.value = value === true ? new Set(data.map((d) => d.id)) : new Set()
}

function toggleRow(id: string, value: boolean | 'indeterminate') {
  const next = new Set(selected.value)
  if (value === true) next.add(id)
  else next.delete(id)
  selected.value = next
}

const formattedTotal = computed(() =>
  currency.format(data.reduce((sum, p) => sum + p.budget, 0))
)
</script>

<template>
  <Frame class="w-full max-w-2xl">
    <Table variant="card">
      <TableHeader>
        <TableRow>
          <TableHead>
            <Checkbox
              aria-label="Select all"
              :model-value="headerState"
              @update:model-value="toggleAll"
            />
          </TableHead>
          <TableHead>Project</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Team</TableHead>
          <TableHead class="text-right">Budget</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow
          v-for="row in data"
          :key="row.id"
          :data-state="selected.has(row.id) ? 'selected' : undefined"
        >
          <TableCell>
            <Checkbox
              aria-label="Select row"
              :model-value="selected.has(row.id)"
              @update:model-value="(v: boolean | 'indeterminate') => toggleRow(row.id, v)"
            />
          </TableCell>
          <TableCell class="font-medium">{{ row.project }}</TableCell>
          <TableCell>
            <Badge variant="outline">
              <span aria-hidden="true" :class="['size-1.5 rounded-full', statusColor[row.status]]" />
              {{ row.status }}
            </Badge>
          </TableCell>
          <TableCell>{{ row.team }}</TableCell>
          <TableCell class="text-right">{{ currency.format(row.budget) }}</TableCell>
        </TableRow>
      </TableBody>
      <TableFooter>
        <TableRow>
          <TableCell :colspan="4">Total Budget</TableCell>
          <TableCell class="text-right">{{ formattedTotal }}</TableCell>
        </TableRow>
      </TableFooter>
    </Table>
  </Frame>
</template>
