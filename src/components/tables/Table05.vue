<script setup lang="ts">
import Badge from '@/components/ui/Badge.vue'
import Button from '@/components/ui/Button.vue'
import Checkbox from '@/components/ui/Checkbox.vue'
import { Frame, FrameFooter } from '@/components/ui/Frame'
import SelectNative from '@/components/ui/SelectNative.vue'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from '@/components/ui/Table'
import { cn } from '@/lib/utils'
import {
  ChevronDown as ChevronDownIcon,
  ChevronLeft as ChevronLeftIcon,
  ChevronRight as ChevronRightIcon,
  ChevronUp as ChevronUpIcon,
  PlaneTakeoff as PlaneTakeoffIcon
} from 'lucide-vue-next'
import { computed, ref } from 'vue'

type Status = 'On Time' | 'Delayed' | 'Cancelled' | 'Boarding'
type Flight = {
  id: string
  flightCode: string
  destination: string
  departureTime: string
  arrivalTime: string
  duration: string
  terminal: string
  gate: string
  status: Status
}

const flights: Flight[] = [
  { id: '1', flightCode: 'AA1234', destination: 'Los Angeles', departureTime: '08:30', arrivalTime: '11:45', duration: '5h 15m', terminal: '1', gate: 'A12', status: 'On Time' },
  { id: '2', flightCode: 'DL5678', destination: 'San Francisco', departureTime: '14:20', arrivalTime: '17:10', duration: '4h 50m', terminal: '2', gate: 'B24', status: 'Delayed' },
  { id: '3', flightCode: 'UA9012', destination: 'Miami', departureTime: '10:15', arrivalTime: '13:30', duration: '3h 15m', terminal: '1', gate: 'C8', status: 'On Time' },
  { id: '4', flightCode: 'SW3456', destination: 'Seattle', departureTime: '16:45', arrivalTime: '18:20', duration: '2h 35m', terminal: '3', gate: 'D15', status: 'On Time' },
  { id: '5', flightCode: 'JB7890', destination: 'Salt Lake City', departureTime: '09:00', arrivalTime: '12:30', duration: '5h 30m', terminal: '2', gate: 'E3', status: 'Cancelled' },
  { id: '6', flightCode: 'AS2345', destination: 'Phoenix', departureTime: '11:30', arrivalTime: '14:15', duration: '2h 45m', terminal: '1', gate: 'F7', status: 'On Time' },
  { id: '7', flightCode: 'HA6789', destination: 'Las Vegas', departureTime: '13:00', arrivalTime: '20:30', duration: '5h 30m', terminal: '2', gate: 'G12', status: 'Delayed' },
  { id: '8', flightCode: 'FX0123', destination: 'Dallas', departureTime: '07:15', arrivalTime: '09:00', duration: '1h 45m', terminal: '1', gate: 'H5', status: 'Boarding' },
  { id: '9', flightCode: 'WN4567', destination: 'Denver', departureTime: '06:00', arrivalTime: '08:30', duration: '2h 30m', terminal: '2', gate: 'I9', status: 'Boarding' },
  { id: '10', flightCode: 'B61234', destination: 'Portland', departureTime: '12:45', arrivalTime: '15:20', duration: '2h 35m', terminal: '3', gate: 'J14', status: 'On Time' },
  { id: '11', flightCode: 'NK8901', destination: 'Atlanta', departureTime: '15:30', arrivalTime: '18:45', duration: '3h 15m', terminal: '1', gate: 'K6', status: 'On Time' },
  { id: '12', flightCode: 'F92345', destination: 'Chicago', departureTime: '09:45', arrivalTime: '12:00', duration: '2h 15m', terminal: '2', gate: 'L11', status: 'Delayed' },
  { id: '13', flightCode: 'SY6789', destination: 'Boston', departureTime: '11:00', arrivalTime: '14:15', duration: '3h 15m', terminal: '1', gate: 'M3', status: 'On Time' },
  { id: '14', flightCode: 'G40123', destination: 'New York', departureTime: '13:30', arrivalTime: '16:45', duration: '3h 15m', terminal: '3', gate: 'N8', status: 'On Time' },
  { id: '15', flightCode: 'YX5678', destination: 'Washington', departureTime: '08:00', arrivalTime: '11:20', duration: '3h 20m', terminal: '2', gate: 'O12', status: 'Delayed' },
  { id: '16', flightCode: '4U9012', destination: 'Orlando', departureTime: '10:30', arrivalTime: '13:50', duration: '3h 20m', terminal: '1', gate: 'P5', status: 'Delayed' },
  { id: '17', flightCode: 'QF3456', destination: 'Houston', departureTime: '14:00', arrivalTime: '16:30', duration: '2h 30m', terminal: '3', gate: 'Q9', status: 'On Time' },
  { id: '18', flightCode: 'LH7890', destination: 'Minneapolis', departureTime: '07:30', arrivalTime: '10:00', duration: '2h 30m', terminal: '2', gate: 'R7', status: 'Cancelled' },
  { id: '19', flightCode: 'KL2345', destination: 'Detroit', departureTime: '16:15', arrivalTime: '19:30', duration: '3h 15m', terminal: '1', gate: 'S4', status: 'Cancelled' },
  { id: '20', flightCode: 'AF6789', destination: 'Philadelphia', departureTime: '12:00', arrivalTime: '15:10', duration: '3h 10m', terminal: '3', gate: 'T16', status: 'On Time' },
  { id: '21', flightCode: 'BA0123', destination: 'Charlotte', departureTime: '09:15', arrivalTime: '12:25', duration: '3h 10m', terminal: '2', gate: 'U10', status: 'On Time' },
  { id: '22', flightCode: 'IB4567', destination: 'Nashville', departureTime: '15:45', arrivalTime: '18:00', duration: '2h 15m', terminal: '1', gate: 'V8', status: 'Delayed' },
  { id: '23', flightCode: 'EK8901', destination: 'Austin', departureTime: '11:45', arrivalTime: '14:00', duration: '2h 15m', terminal: '3', gate: 'W13', status: 'Cancelled' },
  { id: '24', flightCode: 'QR2345', destination: 'Tampa', departureTime: '13:15', arrivalTime: '16:40', duration: '3h 25m', terminal: '2', gate: 'X6', status: 'On Time' },
  { id: '25', flightCode: 'TK6789', destination: 'Raleigh', departureTime: '08:45', arrivalTime: '11:30', duration: '2h 45m', terminal: '1', gate: 'Y11', status: 'On Time' },
  { id: '26', flightCode: 'VS3456', destination: 'Indianapolis', departureTime: '10:00', arrivalTime: '12:45', duration: '2h 45m', terminal: '2', gate: 'Z4', status: 'On Time' },
  { id: '27', flightCode: 'LX7890', destination: 'Kansas City', departureTime: '17:30', arrivalTime: '20:00', duration: '2h 30m', terminal: '3', gate: 'A8', status: 'Delayed' },
  { id: '28', flightCode: 'OS1234', destination: 'Columbus', departureTime: '12:30', arrivalTime: '15:20', duration: '2h 50m', terminal: '1', gate: 'B19', status: 'On Time' },
  { id: '29', flightCode: 'SN5678', destination: 'Milwaukee', departureTime: '18:00', arrivalTime: '20:15', duration: '2h 15m', terminal: '2', gate: 'C22', status: 'On Time' },
  { id: '30', flightCode: 'TP9012', destination: 'Memphis', departureTime: '19:15', arrivalTime: '21:30', duration: '2h 15m', terminal: '3', gate: 'D6', status: 'On Time' }
]

const statusColor: Record<Status, string> = {
  'On Time': 'bg-emerald-500',
  Delayed: 'bg-amber-500',
  Cancelled: 'bg-red-500',
  Boarding: 'bg-blue-500'
}

type SortKey = 'flightCode' | 'departureTime' | 'destination' | 'status' | 'terminal' | 'gate'

const columns: { key: SortKey; label: string; width: string }[] = [
  { key: 'flightCode', label: 'Flight', width: '80px' },
  { key: 'departureTime', label: 'Time', width: '220px' },
  { key: 'destination', label: 'Destination', width: '180px' },
  { key: 'status', label: 'Status', width: '120px' },
  { key: 'terminal', label: 'Terminal', width: '90px' },
  { key: 'gate', label: 'Gate', width: '80px' }
]

const sortKey = ref<SortKey>('departureTime')
const sortDesc = ref(false)

function toggleSort(key: SortKey) {
  if (sortKey.value === key) sortDesc.value = !sortDesc.value
  else {
    sortKey.value = key
    sortDesc.value = false
  }
}

const sorted = computed(() => {
  const rows = [...flights]
  rows.sort((a, b) => {
    const av = a[sortKey.value]
    const bv = b[sortKey.value]
    const cmp = av < bv ? -1 : av > bv ? 1 : 0
    return sortDesc.value ? -cmp : cmp
  })
  return rows
})

const pageSize = 10
const pageIndex = ref(0)
const pageCount = computed(() => Math.ceil(flights.length / pageSize))
const paged = computed(() =>
  sorted.value.slice(pageIndex.value * pageSize, (pageIndex.value + 1) * pageSize)
)

const ranges = computed(() =>
  Array.from({ length: pageCount.value }, (_, i) => {
    const start = i * pageSize + 1
    const end = Math.min((i + 1) * pageSize, flights.length)
    return { value: i, label: `${start}-${end}` }
  })
)

const selected = ref<Set<string>>(new Set())
const pageIds = computed(() => paged.value.map((f) => f.id))
const allSelected = computed(
  () => pageIds.value.length > 0 && pageIds.value.every((id) => selected.value.has(id))
)
const someSelected = computed(
  () => pageIds.value.some((id) => selected.value.has(id)) && !allSelected.value
)
const headerState = computed<boolean | 'indeterminate'>(() =>
  allSelected.value ? true : someSelected.value ? 'indeterminate' : false
)

function toggleAll(value: boolean | 'indeterminate') {
  const next = new Set(selected.value)
  if (value === true) pageIds.value.forEach((id) => next.add(id))
  else pageIds.value.forEach((id) => next.delete(id))
  selected.value = next
}

function toggleRow(id: string, value: boolean | 'indeterminate') {
  const next = new Set(selected.value)
  if (value === true) next.add(id)
  else next.delete(id)
  selected.value = next
}
</script>

<template>
  <Frame class="w-full max-w-4xl">
    <Table variant="card" class="table-fixed">
      <TableHeader>
        <TableRow class="hover:bg-transparent">
          <TableHead style="width: 28px">
            <Checkbox
              aria-label="Select all rows"
              :model-value="headerState"
              @update:model-value="toggleAll"
            />
          </TableHead>
          <TableHead v-for="col in columns" :key="col.key" :style="{ width: col.width }">
            <div
              class="flex h-full cursor-pointer select-none items-center justify-between gap-2"
              role="button"
              tabindex="0"
              @click="toggleSort(col.key)"
              @keydown.enter.prevent="toggleSort(col.key)"
              @keydown.space.prevent="toggleSort(col.key)"
            >
              {{ col.label }}
              <ChevronUpIcon
                v-if="sortKey === col.key && !sortDesc"
                aria-hidden="true"
                class="size-4 shrink-0 opacity-80"
              />
              <ChevronDownIcon
                v-else-if="sortKey === col.key && sortDesc"
                aria-hidden="true"
                class="size-4 shrink-0 opacity-80"
              />
            </div>
          </TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow
          v-for="flight in paged"
          :key="flight.id"
          :data-state="selected.has(flight.id) ? 'selected' : undefined"
        >
          <TableCell>
            <Checkbox
              aria-label="Select row"
              :model-value="selected.has(flight.id)"
              @update:model-value="(v: boolean | 'indeterminate') => toggleRow(flight.id, v)"
            />
          </TableCell>
          <TableCell>
            <div class="font-medium font-mono text-muted-foreground">{{ flight.flightCode }}</div>
          </TableCell>
          <TableCell>
            <div
              :class="
                cn(
                  'flex items-center gap-1.5 font-normal tabular-nums',
                  flight.status === 'Cancelled' && 'text-muted-foreground line-through opacity-50'
                )
              "
            >
              <div :class="flight.status === 'Delayed' ? 'text-warning-foreground' : undefined">
                {{ flight.departureTime }}
              </div>
              <div
                aria-hidden="true"
                class="flex items-center gap-0.5 opacity-50 before:size-1.5 before:rounded-full before:border before:border-muted-foreground after:h-px after:w-3 after:border-muted-foreground after:border-t after:border-dashed"
              />
              <div :class="cn('text-muted-foreground', flight.status === 'Cancelled' && 'line-through')">
                {{ flight.duration }}
              </div>
              <div
                aria-hidden="true"
                class="flex items-center gap-0.5 opacity-50 before:order-1 before:size-1.5 before:rounded-full before:border before:border-muted-foreground after:h-px after:w-3 after:border-muted-foreground after:border-t after:border-dashed"
              />
              <div>{{ flight.arrivalTime }}</div>
            </div>
          </TableCell>
          <TableCell>
            <div class="font-medium">{{ flight.destination }}</div>
          </TableCell>
          <TableCell>
            <Badge variant="outline">
              <span aria-hidden="true" :class="['size-1.5 rounded-full', statusColor[flight.status]]" />
              {{ flight.status }}
            </Badge>
          </TableCell>
          <TableCell>
            <Badge variant="outline" class="font-normal tabular-nums">
              <PlaneTakeoffIcon class="size-3.5" />
              <span>{{ flight.terminal }}</span>
            </Badge>
          </TableCell>
          <TableCell>{{ flight.gate }}</TableCell>
        </TableRow>
      </TableBody>
    </Table>
    <FrameFooter class="p-2">
      <div class="flex items-center justify-between gap-2">
        <div class="flex items-center gap-2 whitespace-nowrap">
          <p class="text-muted-foreground text-sm">Viewing</p>
          <SelectNative
            :model-value="pageIndex"
            aria-label="Select result range"
            class="w-fit"
            @update:model-value="(v: string | number) => (pageIndex = Number(v))"
          >
            <option v-for="range in ranges" :key="range.value" :value="range.value">
              {{ range.label }}
            </option>
          </SelectNative>
          <p class="text-muted-foreground text-sm">
            of <strong class="font-medium text-foreground">{{ flights.length }}</strong> results
          </p>
        </div>

        <nav aria-label="Pagination" class="flex justify-end gap-1">
          <Button
            variant="outline"
            size="icon"
            aria-label="Previous page"
            :disabled="pageIndex === 0"
            @click="pageIndex = Math.max(0, pageIndex - 1)"
          >
            <ChevronLeftIcon />
          </Button>
          <Button
            variant="outline"
            size="icon"
            aria-label="Next page"
            :disabled="pageIndex >= pageCount - 1"
            @click="pageIndex = Math.min(pageCount - 1, pageIndex + 1)"
          >
            <ChevronRightIcon />
          </Button>
        </nav>
      </div>
    </FrameFooter>
  </Frame>
</template>
