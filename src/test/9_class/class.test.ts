import {createBird} from "../../study/9_class/class";

describe('클래스 생성 테스트', () => {
    it('when_class_created_then_should_not_be_null', () => {
        expect(createBird('독수리', 30)).not.toBeNull()
    });
})
