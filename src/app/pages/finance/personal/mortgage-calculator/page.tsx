'use client';

import PageContainer from "@/app/pages/PageContainer";
import Container from "react-bootstrap/Container";
import {Col, Row} from "react-bootstrap";
import {PageBannerComponent} from "@/app/ui/common/PageBannerComponent";
import {MortgageInputComponent} from "@/app/pages/finance/personal/mortgage-calculator/MortgageInputComponent";
import {useState} from "react";
import {CreditScore} from "@/app/pages/finance/personal/mortgage-calculator/MortgageCalculator";
import {MortgageBreakdownComponent} from "@/app/pages/finance/personal/mortgage-calculator/MortgageBreakdownComponent";

export default function MortgageCalculator(){
    const [amount, setAmount] = useState<number>(450000)
    const [downPaymentAmount, setDownPaymentAmount] = useState<number>(900000)
    const [downPaymentPercentage, setDownPaymentPercentage] = useState<number>(20)
    const [term, setTerm] = useState<number>(30)
    const [interestRate, setInterestRate] = useState<number>(6.5)
    const [zipCode, setZipCode] = useState<number>(10040)
    const [extraPrinciplePayment, setExtraPrinciplePayment] = useState<number>(0)
    const [pmi, setPmi] = useState<number>(0)
    const [propertyTax, setPropertyTax] = useState<number>(0)
    const [hoaFees, setHoaFees] = useState<number>(0)
    const [homeOwnersInsurance, setHomeOwnersInsurance] = useState<number>(0)
    const [creditScore, setCreditScore] = useState<CreditScore>(CreditScore["740+"])
    function updateAmount(value: string){
        const intValue = parseFloat(value)
        const percentage= (downPaymentAmount/intValue) * 100
        setAmount(intValue)
        setDownPaymentPercentage(percentage)
    }
    function updatePaymentAmount(value: string){
        const intValue = parseFloat(value)
        const percentage= (intValue/amount) * 100
        setDownPaymentAmount(intValue)
        setDownPaymentPercentage(percentage)
    }
    function updatePaymentPercentage(value: string){
        const intValue = parseFloat(value)
        const payment = (intValue/100) * amount;
        setDownPaymentPercentage(intValue)
        setDownPaymentAmount(payment)
    }
    function updateTerm(value: string){
        const intValue = parseInt(value)
        setTerm(intValue)
    }
    function updateCreditScore(value:string){
        setCreditScore(CreditScore[value])
    }
    function updateZipcode(value: string){
        const intValue = parseInt(value)
        setZipCode(intValue)
    }
    function updateHomeOwnersInsurance(value: string){
        const intValue = parseFloat(value)
        setHomeOwnersInsurance(intValue)
    }
    function updateHoaFees(value: string){
        const intValue = parseFloat(value)
        setHoaFees(intValue)
    }
    function updateInterestRate(value: string){
        const intValue = parseFloat(value)
        setInterestRate(intValue)
    }
    function updatePropertyTax(value: string){
        const intValue = parseFloat(value)
        setPropertyTax(intValue)
    }
    function updateExtraPayment(value: string){
        const intValue = parseFloat(value)
        setExtraPrinciplePayment(intValue)
    }
    function updatePmi(value: string){
        const intValue = parseFloat(value)
        setPmi(intValue)
    }
    return (
        <PageContainer>
            <Container>
                <Row>
                    <PageBannerComponent text={'Mortgage Calculator'} subText={undefined}/>
                </Row>
                <Row>
                    <Col md={2} lg={3} xl={3} xxl={3}>
                        <MortgageInputComponent
                            amount={amount}
                            downPaymentAmount={downPaymentAmount}
                            downPaymentPercentage={downPaymentPercentage}
                            term={term}
                            interestRate={interestRate}
                            zipCode={zipCode}
                            extraPrinciplePayment={extraPrinciplePayment}
                            pmi={pmi}
                            propertyTax={propertyTax}
                            creditScore={creditScore}
                            hoaFees={hoaFees}
                            homeOwnersInsurance={homeOwnersInsurance}
                            updateAmount={updateAmount}
                            updatePaymentAmount={updatePaymentAmount}
                            updatePaymentPercentage={updatePaymentPercentage}
                            updateTerm={updateTerm}
                            updateCreditScore={updateCreditScore}
                            updateZipcode={updateZipcode}
                            updateHomeOwnersInsurance={updateHomeOwnersInsurance}
                            updateHoaFees={updateHoaFees}
                            updateInterestRate={updateInterestRate}
                            updatePropertyTax={updatePropertyTax}
                            updateExtraPayment={updateExtraPayment}
                            updatePmi={updatePmi}/>
                    </Col>
                    <Col>
                        <MortgageBreakdownComponent
                            amount={amount}
                            downPaymentAmount={downPaymentAmount}
                            downPaymentPercentage={downPaymentPercentage}
                            term={term}
                            interestRate={interestRate}
                            zipCode={zipCode}
                            extraPrinciplePayment={extraPrinciplePayment}
                            pmi={pmi}
                            propertyTax={propertyTax}
                            creditScore={creditScore}
                            hoaFees={hoaFees}
                            homeOwnersInsurance={homeOwnersInsurance}
                            updateAmount={updateAmount}
                            updatePaymentAmount={updatePaymentAmount}
                            updatePaymentPercentage={updatePaymentPercentage}
                            updateTerm={updateTerm}
                            updateCreditScore={updateCreditScore}
                            updateZipcode={updateZipcode}
                            updateHomeOwnersInsurance={updateHomeOwnersInsurance}
                            updateHoaFees={updateHoaFees}
                            updateInterestRate={updateInterestRate}
                            updatePropertyTax={updatePropertyTax}
                            updateExtraPayment={updateExtraPayment}
                            updatePmi={updatePmi}/>
                    </Col>
                </Row>
            </Container>
        </PageContainer>
    )
}