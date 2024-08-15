import PageContainer from "@/app/pages/PageContainer";
import Container from "react-bootstrap/Container";
import { Row} from "react-bootstrap";
import {AyodaiDescriptionComponent} from "@/app/ui/common/AyodaiDescriptionComponent";

export default function Home() {
  return (
    <PageContainer>
        <Container className={'m-auto'}>
          <Row>
            <AyodaiDescriptionComponent/>
        </Row>
      </Container>
    </PageContainer>
  );
}






