'use client';

import {useState} from "react";
import {Mortgage, numberToTwoDecimalPlaces} from "@/app/pages/finance/personal/mortgage-calculator/MortgageCalculator";
import {Form, FormCheck, FormControl, FormGroup, FormLabel, FormSelect, InputGroup} from "react-bootstrap";
import InputGroupText from "react-bootstrap/InputGroupText";

export function MortgageInputComponent(x: Mortgage) {
    const [extended, setExtended] = useState<boolean>(false)
    function updateExtended(value: boolean){
        setExtended(value)
    }

    return (
        <Form>
            <FormGroup className={'mb-3'} controlId={'formMortgageAmount'}>
                <FormLabel>
                    Mortgage Amount
                </FormLabel>
                <InputGroup>
                    <InputGroupText>$</InputGroupText>
                    <FormControl type={'number'}
                                 value={numberToTwoDecimalPlaces(x.amount)}
                                 placeholder={'0'}
                                 onChange={(e) => {
                                     x.updateAmount ? x.updateAmount(e.target.value) : logSilentUpdate('amount');
                                 }}/>
                </InputGroup>
            </FormGroup>
            <FormGroup className={'mb-3'} >
                <FormLabel htmlFor={'downPaymentAmount'}>
                    Down payment amount
                </FormLabel>
                <InputGroup>
                    <InputGroupText>$</InputGroupText>
                    <FormControl type={'number'}
                                 value={numberToTwoDecimalPlaces(x.downPaymentAmount)}
                                 placeholder={'0'}
                                 aria-label={'downPaymentAmount'}
                                 id={'downPaymentAmount'}
                                 onChange={(e) => {
                                     x.updatePaymentAmount ? x.updatePaymentAmount(e.target.value) : logSilentUpdate('downPaymentAmount');
                                 }}
                    />
                </InputGroup>
            </FormGroup>
            <FormGroup className={'mb-3'}>
                <FormLabel htmlFor={'downPaymentPercentage'}>
                    Down payment percentage
                </FormLabel>
                <InputGroup>
                    <FormControl type={'number'}
                                 value={numberToTwoDecimalPlaces(x.downPaymentPercentage)}
                                 placeholder={'0'}
                                 aria-label={'downPaymentPercentage'}
                                 id={'downPaymentPercentage'}
                                 onChange={(e) => {
                                     x.updatePaymentPercentage ? x.updatePaymentPercentage(e.target.value) : logSilentUpdate('downPaymentPercentage');
                                 }}
                    />
                    <InputGroupText>%</InputGroupText>
                </InputGroup>
            </FormGroup>
            <FormGroup className={'mb-3'} >
                <FormLabel htmlFor={'formLoanTerm'}>
                    Loan term
                </FormLabel>
                <InputGroup>
                    <FormSelect id={'formLoanTerm'}
                                value={x.term}
                                onChange={(e) => {
                                    x.updateTerm ? x.updateTerm(e.target.value) : logSilentUpdate('term');
                                }}>
                        <option value={30}>30</option>
                        <option value={20}>20 </option>
                        <option value={15}>15 </option>
                        <option value={10}>10 </option>
                    </FormSelect>
                    <InputGroupText>years</InputGroupText>
                </InputGroup>
            </FormGroup>
            <FormGroup className={'mb-3'} controlId={'formInterestRate'}>
                <FormLabel>
                    Interest rate
                </FormLabel>
                <InputGroup>
                    <FormControl type={'number'}
                                 value={numberToTwoDecimalPlaces(x.interestRate)}
                                 placeholder={'0'}
                                 onChange={(e) => {
                                     x.updateInterestRate ? x.updateInterestRate(e.target.value) : logSilentUpdate('interestRage');
                                 }}/>
                    <InputGroupText>%</InputGroupText>
                </InputGroup>

            </FormGroup>
            <FormGroup className={'mb-3'} controlId={'formZipCode'}>
                <FormLabel>
                    ZIP code
                </FormLabel>
                <FormControl type={'number'} value={x.zipCode} placeholder={'0'}
                             onChange={(e) => {
                                 x.updateZipcode ? x.updateZipcode(e.target.value) : logSilentUpdate('zipCode');
                             }}/>
            </FormGroup>
            <FormCheck type={'switch'}
                       id={'extendedSwitch'}
                       label={'Taxes, PMI, HOA...'}
                       onChange={(e) => updateExtended(e.target.checked)}/>
            {extended && <>
                <FormGroup className={'mb-3'} controlId={'formCreditScore'}>
                    <FormLabel>
                        Credit Score
                    </FormLabel>
                    <FormSelect id={'formCreditScore'}
                                value={x.creditScore}
                                onChange={(e) => {
                                    x.updateCreditScore ? x.updateCreditScore(e.target.value) : logSilentUpdate('creditScore');
                                }}>
                        <option value={'740+'}>740+</option>
                        <option value={'720 - 739'}>720 - 739</option>
                        <option value={'700 - 718'}>700 - 718</option>
                        <option value={'680 - 699'}>680 - 699</option>
                        <option value={'660 - 679'}>660 - 679</option>
                        <option value={'< 660'}>below 660</option>
                    </FormSelect>
                </FormGroup>
                <FormGroup className={'mb-3'} controlId={'formPropertyTaxes'}>
                    <FormLabel>
                        Property taxes per month
                    </FormLabel>
                    <InputGroup>
                        <InputGroupText>$</InputGroupText>
                        <FormControl type={'number'} value={x.propertyTax} placeholder={'0'}
                                     onChange={(e) => {
                                         x.updatePropertyTax ? x.updatePropertyTax(e.target.value) : logSilentUpdate('propertyTax');
                                     }}/>
                    </InputGroup>
                </FormGroup>
                <FormGroup className={'mb-3'} controlId={'formHomeownersInsurance'}>
                    <FormLabel>
                        Homeowner&apos;s insurance per month
                    </FormLabel>
                    <InputGroup>
                        <InputGroupText>$</InputGroupText>
                        <FormControl type={'number'} value={x.homeOwnersInsurance} placeholder={'0'}
                                     onChange={(e) => {
                                         x.updateHomeOwnersInsurance ? x.updateHomeOwnersInsurance(e.target.value) : logSilentUpdate('homeOwnersInsurance');
                                     }}/>
                    </InputGroup>
                </FormGroup>
                <FormGroup className={'mb-3'} controlId={'formMortgagePMI'}>
                    <FormLabel>
                        Private Mortgage Insurance(PMI) per month
                    </FormLabel>
                    <InputGroup>
                        <InputGroupText>$</InputGroupText>
                        <FormControl type={'number'} value={x.pmi} placeholder={'0'}
                                     onChange={(e) => {
                                         x.updatePmi ? x.updatePmi(e.target.value) : logSilentUpdate('pmi');
                                     }}/>
                    </InputGroup>
                </FormGroup>
                <FormGroup className={'mb-3'} controlId={'formMortgageHOA'}>
                    <FormLabel>
                        Homeowner&apos;s association(HOA) fees per month
                    </FormLabel>
                    <InputGroup>
                        <InputGroupText>$</InputGroupText>
                        <FormControl type={'number'} value={x.hoaFees} placeholder={'0'}
                                     onChange={(e) => {
                                         x.updateHoaFees ? x.updateHoaFees(e.target.value) : logSilentUpdate('hoaFees');
                                     }}/>
                    </InputGroup>
                </FormGroup>
                <FormGroup className={'mb-3'} controlId={'formExtraPayment'}>
                    <FormLabel>
                        Extra monthly principle payment amount
                    </FormLabel>
                    <InputGroup>
                        <InputGroupText>$</InputGroupText>
                        <FormControl type={'number'}
                                     value={numberToTwoDecimalPlaces(x.extraPrinciplePayment)}
                                     placeholder={'0'}
                                     onChange={(e) => {
                                         x.updateExtraPayment ? x.updateExtraPayment(e.target.value) : logSilentUpdate('extraPayment');
                                     }}/>
                    </InputGroup>
                </FormGroup>
            </>}
        </Form>
    );
}

function logSilentUpdate(field: string){
    console.log(`Update field ignored: ${field}`)
}