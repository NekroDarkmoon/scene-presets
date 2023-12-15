export default class PresetManager {
  private scenes: Map<String, any> = new Map();

  constructor() {
    // Load stored scene presets from somewhere
  }

  createScenePreset(sceneId: string) {
    const scene: Scene = game.scenes.get(sceneId);



  }

}
