import {ContentLogoCardComponent} from "@/app/ui/common/ContentLogoCardComponent";
import {Icons} from "@/app/ui/common/Icons";

export function PersonalFinanceContentComponent(){
    return (
        <div>
            <ContentLogoCardComponent
                icon={Icons.mortgageCalculator}
                url={'/pages/finance/personal/mortgage-calculator'}
                name={'Mortgage calculator'}/>
            <ContentLogoCardComponent
                icon={Icons.networthCalculator}
                url={'/pages/finance/personal/networth-calculator'}
                name={'Net-worth calculator'}/>
        </div>
    )
}