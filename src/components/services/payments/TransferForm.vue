<template>
  <v-card elevation="0" class="w-100">
    <v-card-title>
      Transfer Form
    </v-card-title>
    <v-card-text>
      <v-form>
        <v-row>
          <v-col>
            <SenderCardNumberInput/>
          </v-col>
          <v-col>
            <ReceiverCardNumberInput/>
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
            <SubmitButton :openTransferDetails="openTransferDetails"
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
import Card from "@/components/home/Card";
import OperationSumInput from "@/components/controls/input/OperationSumInput";
import SelectCurrency from "@/components/controls/select/SelectCurrency";
import AccountNumberInput from "@/components/controls/input/AccountNumberInput";
import PersonalDataCheckBox from "@/components/controls/checkbox/PersonalDataCheckBox";
import SubmitButton from "@/components/controls/button/SubmitButton";
import ResetButton from "@/components/controls/button/ResetButton";
import SenderCardNumberInput from "@/components/controls/input/SenderCardNumberInput";
import ReceiverCardNumberInput from "@/components/controls/input/ReceiverCardNumberInput";

export default {
  name: "TransferForm",
  data: () => ({
    openTransferDetails: true
  }),
  components: {
    ReceiverCardNumberInput,
    SenderCardNumberInput,
    ResetButton,
    SubmitButton,
    PersonalDataCheckBox, AccountNumberInput, SelectCurrency, OperationSumInput, Card
  },
  props: {
    cards: {
      type: Array
    },
    payments: {
      type: Array
    }
  }
}
</script>

<style scoped>

</style>