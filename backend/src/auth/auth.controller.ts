import { Controller, Get, UseGuards, Post, Body, Put } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UtilisateurPostInDto } from 'src/utilisateur/utilisateur.dto';
import { AuthPostInDto } from './auth.dto';
import { AdressePostInDto } from 'src/adresse/adresse.dto';
import { AdresseService } from 'src/adresse/adresse.service';
import { Adresse } from 'src/adresse/adresse.entity';
import { Utilisateur } from 'src/utilisateur/utilisateur.entity';
import { UtilisateurService } from 'src/utilisateur/utilisateur.service';
import { ClientService } from 'src/client/client.service';
import { AgentService } from 'src/agent/agent.service';
import { AgenceService } from 'src/agence/agence.service';
import { Client } from 'src/client/client.entity';
import { ClientPostInDto } from 'src/client/client.dto';
import { Agent } from 'src/agent/agent.entity';
import { Agence } from 'src/agence/agence.entity';

@Controller('auth')
export class AuthController {
  constructor(
    private readonly authService: AuthService,
    private readonly adresseService: AdresseService,
    private readonly utilisateurService: UtilisateurService,
    private readonly clientService: ClientService,
    private readonly agentService: AgentService,
    private readonly agenceService: AgenceService,
  ) {}

  @Post('login')
  async login(@Body() dto: AuthPostInDto) {
    return this.authService.login(dto);
  }

  @Post('checkpassword')
  async checkPassword(@Body() idPwd: [string, string]) {
    const utilisateur: Utilisateur = await this.utilisateurService.findById(
      idPwd[0],
    );
    return (await this.authService.validate(
      utilisateur.utilisateurMail,
      idPwd[1],
    )) === undefined
      ? false
      : true;
  }

  @Post('register')
  async register(@Body() dto: UtilisateurPostInDto) {
    return this.authService.register(dto);
  }

  @Post('inscription')
  async inscription(
    @Body() dto: [Partial<UtilisateurPostInDto>, Partial<AdressePostInDto>],
  ) {
    const user = await this.utilisateurService.findOneByEmail(
      dto[0].utilisateurMail,
    );

    if (user === undefined) {
      try {
        let adresse: Adresse = await this.adresseService.create(dto[1]);
        let utilisateur = await this.authService.register({
          ...dto[0],
          utilisateurAdresse: adresse.adresseId,
        });
        let client: Client = new Client();
        client.clientUtilisateur = utilisateur.utilisateurId;
        client.clientNumParrainage = utilisateur.utilisateurId;
        await this.clientService.create(client);

        let agence: Agence = new Agence();
        agence.agenceMail = 'description';
        agence.agenceTel = '0000000000';
        agence.agenceFrais = 2.0;
        agence.agenceAdresse = utilisateur.utilisateurAdresse;
        agence = await this.agenceService.create(agence);

        let agent: Agent = new Agent();
        agent.agentDescription = 'description';
        agent.agentAgence = agence.agenceId;
        agent.agentUtilisateur = utilisateur.utilisateurId;
        await this.agentService.create(agent);

        return utilisateur;
      } catch (e) {
        // return e;
      }
    } else {
      // return "l'adresse mail existe déjà";
    }
  }

  @Put('update')
  async update(
    @Body()
    dto: [string, Partial<UtilisateurPostInDto>, Partial<AdressePostInDto>],
  ): Promise<Utilisateur> {
    const user = await this.utilisateurService.findOneByEmail(
      dto[1].utilisateurMail,
    );

    if (user === undefined || user.utilisateurId == dto[0]) {
      const utilisateur: Utilisateur = await this.authService.update(
        dto[0],
        dto[1],
      );
      await this.adresseService.update(utilisateur.utilisateurAdresse, dto[2]);

      return utilisateur;
    } else {
      return null;
    }
  }

  @Put('updatepassword')
  async upadatePassword(@Body() idMdp: [string, string]): Promise<Utilisateur> {
    return await this.authService.update(idMdp[0], {
      utilisateurMotDePasse: idMdp[1],
    });
  }
}
