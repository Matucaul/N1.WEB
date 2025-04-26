import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProdutoModule } from './modules/produto/produto.module';
import { ClienteModule } from './modules/cliente/cliente.module';
import { EntregadorModule } from './modules/entregador/entregador.module';
import { FornecedorModule } from './modules/fornecedor/fornecedor.module';
import { CategoriaModule } from './modules/categoria/categoria.module';
import { AdministradorModule } from './modules/administrador/administrador.module';
import { PedidoModule } from './modules/pedido/pedido.module';
import { EnderecoModule } from './modules/endereco/endereco.module';
import { AvaliacaoModule } from './modules/avaliacao/avaliacao.module';
import { PagamentoModule } from './modules/pagamento/pagamento.module';

@Module({
  imports: [
  TypeOrmModule.forRoot({
type:'sqlite',
database: 'db.sqlite',
entities: [__dirname + '/**/*.entity{.ts,.js}'], 
synchronize: true,
  }),
  
  
  ProdutoModule,
  
  ClienteModule,
  
  EntregadorModule,
  
  FornecedorModule,
    
  CategoriaModule,
  
  AdministradorModule,
  
  PedidoModule,
    
  EnderecoModule,
    
  AvaliacaoModule,
    
  PagamentoModule
],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
