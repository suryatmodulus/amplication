import { Controller } from "@nestjs/common";
import { MessagePattern, Payload } from "@nestjs/microservices";
import { GitPullEventService } from "./git-pull-event.service";
import { KafkaTopics } from "./git-pull-event.types";

@Controller()
export class GitPullEventController {
  constructor(protected readonly gitPullEventService: GitPullEventService) {}

  @MessagePattern(KafkaTopics.GitExternalPush)
  async processRepositoryPushEvent(@Payload() message: any) {
    await this.gitPullEventService.handlePushEvent(message.value);
  }
}
