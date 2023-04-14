<template>
  <v-card elevation="0" class="w-100">
    <v-card-title>
      Payment Form
    </v-card-title>

    <v-card-text>
      <v-form>
        <v-row>
          <v-col>
            <SenderCardNumberInput/>
          </v-col>
          <v-col>
            <AccountNumberInput/>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <SelectCurrency/>
          </v-col>
          <v-col>
            <OperationSumInput/>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12" md="6">
            <PersonalDataCheckBox/>
          </v-col>
          <v-col cols="6" md="3">
            <SubmitButton :openPaymentDetails="openPaymentDetails"
                          :payment="payments[Math.floor(Math.random()*payments.length)]"
            />
          </v-col>
          <v-col cols="6" md="3">
            <ResetButton/>
          </v-col>
        </v-row>
      </v-form>
    </v-card-text>
  </v-card>
</template>

<script>
import SenderCardNumberInput from "@/components/controls/input/SenderCardNumberInput";
import AccountNumberInput from "@/components/controls/input/AccountNumberInput";
import SelectCurrency from "@/components/controls/select/SelectCurrency";
import OperationSumInput from "@/components/controls/input/OperationSumInput";
import PersonalDataCheckBox from "@/components/controls/checkbox/PersonalDataCheckBox";
import SubmitButton from "@/components/controls/button/SubmitButton";
import ResetButton from "@/components/controls/button/ResetButton";

export default {
  name: "PaymentForm",
  components: {
    ResetButton,
    SubmitButton,
    PersonalDataCheckBox, OperationSumInput, SelectCurrency, AccountNumberInput, SenderCardNumberInput
  },
  data: () => ({
    openPaymentDetails: true
  }),
  props: {
    payments: {
      type: Array
    }
  }
}
</script>

<style scoped>

</style>