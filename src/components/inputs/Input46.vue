<template>
  <div class="space-y-2" dir="ltr">
    <label
      for="input-46"
      class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
    >
      Phone number input
    </label>

    <div class="flex rounded-lg shadow-sm shadow-black/[.04]">
      <!-- Country Select -->
      <div
        class="relative inline-flex items-center self-stretch rounded-l-lg border border-input bg-background py-2 pe-2 ps-3 text-muted-foreground ring-offset-background transition-shadow focus-within:z-10 focus-within:border-ring focus-within:text-foreground focus-within:outline-none focus-within:ring-2 focus-within:ring-ring/30 focus-within:ring-offset-2 hover:bg-accent hover:text-foreground has-[:disabled]:pointer-events-none has-[:disabled]:opacity-50"
      >
        <div class="inline-flex items-center gap-1" aria-hidden="true">
          <span class="flex h-[16px] w-5 items-center overflow-hidden rounded-sm">
            <Phone v-if="!selectedCountry" :size="16" aria-hidden="true" />
            <span v-else class="text-xl">
              {{ countryCodeToFlag(selectedCountry) }}
            </span>
          </span>
          <span class="text-muted-foreground/80">
            <ChevronDown :size="16" :stroke-width="2" aria-hidden="true" />
          </span>
        </div>

        <select
          @change="handleCountryChange"
          class="absolute inset-0 text-sm opacity-0"
          aria-label="Select country"
        >
          <option value="">Select a country</option>
          <option v-for="country in countries" :key="country.id" :value="country.id">
            {{ country.label }} (+{{ country.callingCode }})
          </option>
        </select>
      </div>

      <!-- Phone Input -->
      <input
        id="input-46"
        v-model="phoneNumber"
        type="tel"
        required
        placeholder="Enter phone number"
        class="-ml-px flex h-9 w-full rounded-lg rounded-l-none border border-input bg-background px-3 py-2 text-sm text-foreground shadow-none shadow-black/[.04] ring-offset-background transition-shadow placeholder:text-muted-foreground/70 focus-visible:z-10 focus-visible:border-ring focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/30 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
        :data-invalid-number="phoneNumber && !isValid"
      />
    </div>

    <p class="mt-2 text-xs text-muted-foreground">
      Built with
      <a
        class="underline hover:text-foreground"
        href="https://www.npmjs.com/package/libphonenumber-js"
        target="_blank"
        rel="noopener nofollow"
      >
        libphonenumber-js
      </a>
    </p>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
import {
  AsYouType,
  isValidPhoneNumber,
  getCountries,
  getCountryCallingCode,
  parsePhoneNumberFromString
} from 'libphonenumber-js'
import type { CountryCode } from 'libphonenumber-js'
import { ChevronDown, Phone } from 'lucide-vue-next'

// State
const selectedCountry = ref<CountryCode | null>(null)
const phoneNumber = ref('')
const formattedNumber = ref('')
const isValid = ref(false)

const countries = getCountries()
  .map(country => ({
    id: country,
    callingCode: getCountryCallingCode(country),
    label: new Intl.DisplayNames(['en'], { type: 'region' }).of(country) || country
  }))
  .sort((a, b) => a.label.localeCompare(b.label))

function countryCodeToFlag(countryCode: string) {
  if (!countryCode || countryCode.length !== 2 || !/^[a-zA-Z]+$/.test(countryCode)) {
    return '🏳️'
  }

  const code = countryCode.toUpperCase()
  const offset = 127397

  const flag = Array.from(code)
    .map(letter => String.fromCodePoint(letter.charCodeAt(0) + offset))
    .join('')

  return flag
}

watch(phoneNumber, newValue => {
  if (newValue && !newValue.startsWith('+')) {
    phoneNumber.value = '+' + newValue
    return
  }

  if (newValue.startsWith('+')) {
    const parsed = parsePhoneNumberFromString(newValue)
    if (parsed?.country) {
      selectedCountry.value = parsed.country
    }
  }

  if (selectedCountry.value) {
    const formatter = new AsYouType(selectedCountry.value)
    formattedNumber.value = formatter.input(newValue)
    phoneNumber.value = formattedNumber.value
    isValid.value = isValidPhoneNumber(newValue, selectedCountry.value)
  }
})

const handleCountryChange = (event: Event) => {
  const select = event.target as HTMLSelectElement
  const newCountry = select.value as CountryCode
  selectedCountry.value = newCountry || null

  if (newCountry) {
    const prefix = `+${getCountryCallingCode(newCountry)}`
    if (!phoneNumber.value.startsWith(prefix)) {
      phoneNumber.value =
        prefix +
        (phoneNumber.value.startsWith('+') ? phoneNumber.value.slice(1) : phoneNumber.value)
    }
  }

  if (phoneNumber.value && selectedCountry.value) {
    const formatter = new AsYouType(selectedCountry.value)
    formattedNumber.value = formatter.input(phoneNumber.value)
    phoneNumber.value = formattedNumber.value
    isValid.value = isValidPhoneNumber(phoneNumber.value, selectedCountry.value)
  }
}
</script>
