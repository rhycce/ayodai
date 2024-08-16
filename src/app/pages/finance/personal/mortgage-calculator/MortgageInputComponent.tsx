'use client';

import {useState} from "react";
import {CreditScore, Mortgage} from "@/app/pages/finance/personal/mortgage-calculator/MortgageCalculator";
import {Form, FormCheck, FormControl, FormGroup, FormLabel, FormSelect, InputGroup} from "react-bootstrap";
import InputGroupText from "react-bootstrap/InputGroupText";

export function MortgageInputComponent(){
    const [mortgage, setMortgage] = useState<Mortgage>({
        amount : 450000,
        downPaymentAmount: 85000,
        downPaymentPercentage: 20,
        term: 20,
        interestRate: 6.5,
        zipCode: 10040,
    })
    const [extended, setExtended] = useState<boolean>(false)

    function setField(fieldName: string, value: string){
        const intValue = parseInt(value)
        if(fieldName === 'creditScore')
            mortgage.creditScore = CreditScore[value]
        else
            mortgage[fieldName] = intValue;
        if(fieldName === 'downPaymentAmount')
            mortgage.downPaymentPercentage = (mortgage.downPaymentAmount * 100)/mortgage.amount
        if(fieldName === 'downPaymentPercentage')
            mortgage.downPaymentAmount = (mortgage.downPaymentPercentage/100) * mortgage.amount
        setMortgage(mortgage);
    }


    return (
        <Form>
            <FormGroup className={'mb-3'} controlId={'formMortgageAmount'}>
                <FormLabel>
                    Mortgage Amount
                </FormLabel>
                <InputGroup>
                    <InputGroupText>$</InputGroupText>
                    <FormControl type={'number'} placeholder={'0'} value={mortgage.amount} onChange={(e) => setField('amount', e.target.value)}/>
                </InputGroup>
            </FormGroup>
            <FormGroup className={'mb-3'} controlId={'formDownPaymentAmount'}>
                <FormLabel htmlFor={'downPaymentAmount'}>
                    Down payment amount
                </FormLabel>
                <InputGroup>
                    <InputGroupText>$</InputGroupText>
                    <FormControl type={'number'}
                                 placeholder={'0'}
                                 value={mortgage.downPaymentAmount}
                                 aria-label={'downPaymentAmount'}
                                 id={'downPaymentAmount'}
                                 onChange={(e) => setField('downPaymentAmount', e.target.value)}
                    />
                </InputGroup>
            </FormGroup>
            <FormGroup className={'mb-3'} controlId={'formDownPaymentPercentage'}>
                <FormLabel htmlFor={'downPaymentPercentage'}>
                    Down payment percentage
                </FormLabel>
                <InputGroup>
                    <FormControl type={'number'}
                                 placeholder={'0'}
                                 value={mortgage.downPaymentPercentage}
                                 aria-label={'downPaymentPercentage'}
                                 id={'downPaymentPercentage'}
                                 onChange={(e) => setField('downPaymentPercentage', e.target.value)}
                    />
                    <InputGroupText>%</InputGroupText>
                </InputGroup>
            </FormGroup>
            <FormGroup className={'mb-3'} controlId={'formMortgageTerm'}>
                <FormLabel htmlFor={'formLoanTerm'}>
                    Loan term
                </FormLabel>
                <InputGroup>
                    <FormSelect id={'formLoanTerm'}
                                value={mortgage.term}
                                onChange={(e) => setField('term', e.target.value)}>
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
                                 placeholder={'0'}
                                 value={mortgage.interestRate}
                                 onChange={(e) => setField('interestRate', e.target.value)}/>
                    <InputGroupText>%</InputGroupText>
                </InputGroup>

            </FormGroup>
            <FormGroup className={'mb-3'} controlId={'formZipCode'}>
                <FormLabel>
                    ZIP code
                </FormLabel>
                <FormControl type={'number'} placeholder={'0'} value={mortgage.zipCode}
                             onChange={(e) => setField('zipCode', e.target.value)}/>
            </FormGroup>
            <FormCheck type={'switch'}
                       id={'extendedSwitch'}
                       label={'Taxes, PMI, HOA...'}
                       onChange={(e) => setExtended(e.target.checked)}/>
            {extended && <>
                <FormGroup className={'mb-3'} controlId={'formCreditScore'}>
                    <FormLabel>
                        Credit Score
                    </FormLabel>
                    <FormSelect id={'formCreditScore'}
                                value={mortgage.creditScore}
                                onChange={(e) => setField('creditScore', e.target.value)}>
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
                        <FormControl type={'number'} placeholder={'0'} value={mortgage.propertyTax}
                                     onChange={(e) => setField('propertyTax', e.target.value)}/>
                        <InputGroupText>&</InputGroupText>
                    </InputGroup>
                </FormGroup>
                <FormGroup className={'mb-3'} controlId={'formHomeownersInsurance'}>
                    <FormLabel>
                        Homeowner&apos;s insurance per month
                    </FormLabel>
                    <InputGroup>
                        <InputGroupText>$</InputGroupText>
                        <FormControl type={'number'} placeholder={'0'} value={mortgage.homeOwnersInsurance}
                                     onChange={(e) => setField('homeOwnersInsurance', e.target.value)}/>
                    </InputGroup>
                </FormGroup>
                <FormGroup className={'mb-3'} controlId={'formMortgagePMI'}>
                    <FormLabel>
                        Private Mortgage Insurance(PMI) per month
                    </FormLabel>
                    <InputGroup>
                        <InputGroupText>$</InputGroupText>
                        <FormControl type={'number'} placeholder={'0'} value={mortgage.pmi}
                                     onChange={(e) => setField('pmi', e.target.value)}/>
                    </InputGroup>
                </FormGroup>
                <FormGroup className={'mb-3'} controlId={'formMortgageHOA'}>
                    <FormLabel>
                        Homeowner&apos;s association(HOA) fees per month
                    </FormLabel>
                    <InputGroup>
                        <InputGroupText>$</InputGroupText>
                        <FormControl type={'number'} placeholder={'0'} value={mortgage.hoaFees}
                                     onChange={(e) => setField('hoaFees', e.target.value)}/>
                    </InputGroup>
                </FormGroup>
                <FormGroup className={'mb-3'} controlId={'formExtraPayment'}>
                    <FormLabel>
                        Extra monthly principle payment amount
                    </FormLabel>
                    <InputGroup>
                        <InputGroupText>$</InputGroupText>
                        <FormControl type={'number'} placeholder={'0'} value={mortgage.extraPayment}
                                     onChange={(e) => setField('extraPayment', e.target.value)}/>
                    </InputGroup>
                </FormGroup>
            </>}
        </Form>
    );
}