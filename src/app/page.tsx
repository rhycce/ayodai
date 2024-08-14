import PageContainer from "@/app/pages/PageContainer";
import Container from "react-bootstrap/Container";
import { Row} from "react-bootstrap";
import {AyodaiDescriptionComponent} from "@/app/ui/common/AyodaiDescriptionComponent";
import {WelcomeGreetingComponent} from "@/app/ui/common/WelcomeGreetingComponent";

export default function Home() {
  return (
    <PageContainer>
        <Container className={'p-5 m-5'}>
          <Row>
            <AyodaiDescriptionComponent/>
        </Row>
      </Container>
    </PageContainer>
  );
}






